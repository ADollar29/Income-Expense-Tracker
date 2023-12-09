const mongoose = require("mongoose");

//connect

const dbConnect = async()=>{
    try{
        await mongoose.connect("Key Here"
        );
        console.log("Db connected Succsessfully");
    }catch (errror){
        console.log(errror.message);
        process.exit(1);
    }
};

dbConnect();