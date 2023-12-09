class AppErr extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status ="failed";
    }
}

// function can also be used to handle the errors
const appErr = (message, statusCode)=>{
    let error = new Error(message);
    error.statusCode = statusCode;
    return error;
}


module.exports = {
    AppErr,
    appErr,
};