const mongoose = require("mongoose");

//connect

const dbConnect = async()=>{
    try{
        await mongoose.connect("mongodb+srv://abdallaosman643:BWoTSlzpalBdut13@cluster0.8ok12of.mongodb.net/"
        );
        console.log("Db connected Succsessfully");
    }catch (errror){
        console.log(errror.message);
        process.exit(1);
    }
};

dbConnect();