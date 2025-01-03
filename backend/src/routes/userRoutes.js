    const express = require("express");
    const verifyToken = require("../middlewares/authMiddleware");
   const  authorizeRoles = require("../middlewares/roleMiddleware");

    const router = express.Router();

    //only admin can acess this router 
    router.get("/admin", verifyToken ,authorizeRoles ("admin") ,(req,res) =>{
        res.json({message: "Welcome Admin"});
    });


    //both admin and student can acess this router
    router.get("/faculty",verifyToken ,   authorizeRoles ("admin","faculty"),(req,res) =>{
        res.json({message: "Welcome Faculty"});
    });


    //all can access this router
    router.get("/student",verifyToken , authorizeRoles ("admin","faculty","student"),(req,res) =>{
        res.json({message: "Welcome Student"});
    });



    module.exports = router;