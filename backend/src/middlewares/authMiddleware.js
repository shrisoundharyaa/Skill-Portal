const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({message: "No token ,  authorization denide"});
        }

        try{
          const decode  = jwt.verify(token,process.env.JWT_SECRET);
         req.user = decode;
         console.log("the decoded user is :",req.user);
         next();
        } catch (err){
            res.status(400).json({message: "Token is not valid"});
        }
         
    }
    else {
        return res.status(401).json({message: "No token ,  authorization denide"});
    }
};



module.exports = verifyToken;