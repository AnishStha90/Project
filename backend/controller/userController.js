const UserModel = require('../models/UserModel') // Consistent capitalization
const TokenModel = require('../models/tokenModel'); // Consistent capitalization
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const emailSender = require('../middleware/emailSender'); // Corrected middleware path
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
    const { username, email, password, phone } = req.body;

    // Check if username is available
    let usernameExists = await UserModel.findOne({ username });
    if (usernameExists) {
        return res.status(400).json({ error: "Username not available" });
    }

    // Check if email is already registered
    let emailExists = await UserModel.findOne({ email });
    if (emailExists) {
        return res.status(400).json({ error: "Email not available" });
    }

    // Check if phone number is valid (must be a 10-digit number)
    if (!/^\d{10}$/.test(phone)) {
        return res.status(400).json({ error: "Phone number must be a 10-digit number" });
    }

    // Encrypt password
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    // Register user
    let user = await UserModel.create({
        username,
        email,
        password: hashedPassword,
        phone
    });

    if (!user) {
        return res.status(400).json({ error: "Something went wrong" });
    }

    // Generate verification token
    const token = await TokenModel.create({
        user: user._id,
        token: crypto.randomBytes(24).toString('hex')
    });

    if (!token) {
        return res.status(400).json({ error: "Something went wrong" });
    }

    // Send token in email
    const VERIFY_URL = `http://localhost:5173/verify/${token.token}`;
    emailSender({
        from: "noreply@something.com",
        to: email,
        subject: "Verification E-mail",
        text: "This is a verification email.",
        html: `<a href='${VERIFY_URL}'><button>Verify Now</button></a>`
    });

    // Send message to user
    res.send({ message: "User Registered Successfully" });
};

// Verify user
exports.verifyUser = async (req, res) => {
    // Check if token is valid or not
    let token = await TokenModel.findOne({ token: req.params.token });
    if (!token) {
        return res.status(400).json({ error: "Invalid token or token may be expired" });
    }

    // Find user associated with token
    let user = await UserModel.findById(token.user);
    if (!user) {
        return res.status(400).json({ error: "User association with token not found" });
    }

    // Check if already verified
    if (user.isVerified) {
        return res.status(400).json({ error: "User already verified" });
    }

    // Verify user
    user.isVerified = true;
    user = await user.save();
    if (!user) {
        return res.status(400).json({ error: "Failed to verify. Try again later" });
    }

    // Send message to user
    res.send({ message: "User verified successfully" });
};

// Forget password
exports.forgetPassword = async (req, res) => {
    // Check if email is registered or not
    let user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ error: "Email not registered" });
    }

    // Generate password reset token
    const token = await TokenModel.create({
        user: user._id,
        token: crypto.randomBytes(24).toString('hex')
    });

    if (!token) {
        return res.status(400).json({ error: "Something went wrong" });
    }

    // Send token in email
    const PASSWORD_RESET_URL = `http://localhost:8000/verify/${token.token}`;
    emailSender({
        from: "noreply@something.com",
        to: req.body.email,
        subject: "Password reset link",
        text: `Copy-paste this URL in your browser: ${PASSWORD_RESET_URL}`,
        html: `<a href='${PASSWORD_RESET_URL}'><button>Verify Now</button></a>`
    });

    // Send message to user
    res.send({ message: "Password reset link has been sent" });
};

// Reset password
exports.resetPassword = async (req, res) => {
    // Check if token is valid or not
    let token = await TokenModel.findOne({ token: req.params.token });
    if (!token) {
        return res.status(400).json({ error: "Invalid token or token may be expired" });
    }

    // Find user associated with token
    let user = await UserModel.findById(token.user);
    if (!user) {
        return res.status(400).json({ error: "User association with token not found" });
    }

    // Encrypt password
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Save document
    user.password = hashedPassword;
    user = await user.save();
    if (!user) {
        return res.status(400).json({ error: "Something went wrong" });
    }

    // Send message to user
    res.send({ message: "Password reset has been successfully completed" });
};

// Login
exports.signin = async (req, res) => {
    // Check if email is registered or not
    let user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ error: "Email not registered" });
    }

    // Check password
    let passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
        return res.status(400).json({ error: "Email and Password do not match" });
    }

    // Check if email is verified or not
    if (!user.isVerified) {
        return res.status(400).json({ error: "User not verified" });
    }

    // Generate login token using JWT
    let token = jwt.sign(
        {
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET
    );

    if (!token) {
        return res.status(400).json({ error: "Something went wrong" });
    }

    // Send token and role to user
    res.send({ token, role: user.role });
};
