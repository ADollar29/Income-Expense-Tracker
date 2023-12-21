const mongoose = require("mongoose");

//connect

const dbConnect = async()=>{
    try{
        await mongoose.connect("mongodb+srv://abdallaosmantech:wzgHIvCYwZbBrvWd@cluster0.gaf0nj8.mongodb.net/"
        );
        console.log("Db connected Succsessfully");
    }catch (errror){
        console.log(errror.message);
        process.exit(1);
    }
};

dbConnect();