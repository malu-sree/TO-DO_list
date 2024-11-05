const userModel=require('../models/usermodel')
const upload=require("../multerfiles/userupload")
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
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

//login
const login = async (req, res) => {
    const { email, password } = req.body;
    let user = await userModel.find({ email: email });

    if (user.length > 0) {
        const password_db = user[0].password;
        const result = await bcrypt.compare(password, password_db);

        if (result) {
            // Assuming createToken is defined somewhere to generate a token
            let token = await createToken(user);
            res.json({ status: 1, msg: "Login success", userid: user[0]._id, 'token': token });
        } else {
            res.json({ status: 0, msg: "Password incorrect" });
        }
    } else {
        res.json({ status: 0, msg: "Incorrect email" });
    }
};

module.exports={
    register,
    login
}