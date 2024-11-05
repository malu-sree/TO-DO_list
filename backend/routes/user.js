const express=require('express')
const upload=require('../multerfiles/userupload')
const user=express.Router()
const {register,login}=require("../controllers/usercontrol")
user.route("/register").post(upload.single('images'),register)
user.route("/login").post(login)



module.exports=user
// const express = require('express');
// const router = express.Router();
// const { register } = require('../controllers/usercontrol');
// const upload = require('../multerfiles/userupload');

// // Apply `upload.single('profileImage')` where 'profileImage' is the name of the file field in the client form
// router.post('/register', upload.single('profileImage'), register);

// module.exports = router;
