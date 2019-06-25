const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/login',async (req,res,next)=>{
    console.log(req.body.name+" Hola");
    new User();
    const user = await User.find()
    console.log(user[0].name);
    
    if(user[0].name===req.body.name && user[0].pass===req.body.pass) {
        console.log("Correcto");
        return  res.json({"msg":"Ok"});
    }
    else{
        console.log("Error");
        return  res.json({"msg":"Error de Credenciales"}); 
    }
    
});

module.exports = router;