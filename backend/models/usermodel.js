const userModel=require('../models/usermodel')
const upload=require("../multerfiles/userupload")
const bcrypt=require('bcrypt')
let salt=10;
const register=async(req,res)=>{
    const {fullname,email,password}=req.body;
    const result=await userModel.find({email:email})
    if(result.length>0){
        res.json({status:0,msg:"email already exist"})
    }
    else
    {
       console.log(req.file.orginalname)
      bcrypt.hash(password,salt,function(err,hash){
         userModel.create({
            fullname:fullname,
            email:email,
            password:hash,
            images:req.file.filename,


         })
      })
      res.json({status:1,msg:"register"})
    }
   
}


module.exports={
    register
}