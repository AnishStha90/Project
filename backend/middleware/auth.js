const jwt = require('jsonwebtoken')

exports.isLoggedIn = async (req, res)=>{
    try{
        let token =await req.headers["authorization"]
        if(!token){
            return res.status(401).json({error: "Login token not found"})
        }
        const user = jwt.verify(token, process.env.JWT_SECRET)
        if(user){
            next()
         }
    }
    catch(error){
        return res.status(401).json({error: error.message})
    }
    
}

exports.isAdmin = async (req, res)=>{
    try{
        let token =await req.headers["authorization"]
        if(!token){
            return res.status(401).json({error: "Login token not found"})
        }
        const user = jwt.verify(token, process.env.JWT_SECRET)
        if(!user){
            return res.status(401).json({error: "Invalid Token"})
        }
        if(user.role != 1){
            return res.status(403).json({error: "You must be admin to access this resource"})
        }
        next()
    }
    catch(error){
        return res.status(401).json({error: error.message})
    }
    
}