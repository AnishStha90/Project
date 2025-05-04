const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },

    email:{
        type: String,
        require: true,
        unique: true, 
        lowercase: true
    },
    password:{
        type: String,
        require: true
    },
    phone:{
        type:  String,
        require: true
    },
    role:{
        type: Number,
        default: 0
    },
    isVerified:{
        type: Boolean,
        default: false
    }
},{timestamps: true})

module.exports=mongoose.model("User", userSchema)