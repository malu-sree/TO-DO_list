const express=require('express')
const upload=require('../multerfiles/userupload')
const user=express.Router()
const {register}=require("../controllers/usercontrol")
user.route("/register").post(upload.single('images'),register)



module.exports=user