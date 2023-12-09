const bcrypt = require("bcryptjs");
const User = require("../../model/User");
//requiring app error class and apperr function
const { AppErr, appErr } = require("../../utils/appErr");
//rquring genrate token
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");

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
const userLoginCtrl =async(req, res, next)=>{
    const {email,password} = req.body
    try{
        //check if email exist
        const userFound = await User.findOne({email});
        if(!userFound) return next(new AppErr("Invalid login credentials", 400));

    //check for password validity
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if(!isPasswordMatch) 
        return next(new AppErr("Invalid login credentials", 400));

        res.json({
            status: "success", 
            fullname: userFound.fullname, 
            id: userFound._id,
            token: generateToken(userFound._id), //so when a user logs in we are going to send a token back to the user, which will be saved in the users broweser
         });
    } catch (error) {
        next(error);
    } 
};
//Proile
const userProfileCtrl =async(req, res)=>{
    const result = verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDVhddMzkyNWRkNTIyNGRkMjM2MTdmNSIsImlhdCI6MTcwMTIwOTg3OSwiZXhwIjoxNzAyMDczODc5fQ.oan8NunHKe0CAAFOTPfSTQuGX1rfKNCEXX57nAEy9BM");
    console.log(result);
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

