const bcrypt = require("bcryptjs");
const User = require("../../model/User"); 
const { AppErr, appErr } = require("../../utils/appErr");

//Register
const registerUserCtrl =async(req, res, next)=>{
    const {fullname, password, email} = req.body
    try{
        //check if email exist
        const userFound = await User.findOne({email})
        if(userFound){
            return next(appErr("User Already Exist", 400));
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const user = await User.create({
            fullname,
            email,      
            password: hashedPassword,
        })
        res.json({
            status: "success",
            fullname: user.fullname,
            email: user.email,
            id: user._id,
        });
    }catch(error){
        next(new Error(error));
    }
};
//login
const userLoginCtrl =async(req, res)=>{
    const {email,password} = req.body
    try{
        //check if email exist
        const userFound = await User.findOne({email});
        if(!userFound) return next(new AppErr("Invalid login credentials", 400));
        //check for password validity
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if(!isPasswordMatch) 
        return next(new Error("Invalid login credentials"));

        res.json({
            status: "success", 
            fullname: userFound.fullname, 
            id: userFound._id
         });
    }catch(error){
        next
    }
};
//Proile
const userProfileCtrl =async(req, res)=>{
    try{
        res.json({msg: "Profile Route"})
    }catch(error){
        res.json(error);
    }
};
//Delete
const deleteUserCtrl =async(req, res)=>{
    try{
        res.json({msg: "Delete Route"})
    }catch(error){
        res.json(error);
    }
};
//Update
const updateUserCtrl =async(req, res)=>{
    try{
        res.json({msg: "Update Route"})
    }catch(error){
        res.json(error);
    }
};
module.exports ={
    registerUserCtrl,
    userLoginCtrl,
    userProfileCtrl,
    deleteUserCtrl,
    updateUserCtrl,
};

