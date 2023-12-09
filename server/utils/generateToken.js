// this file is used to help aid us in authorzation and authtication
// we know that http servers are stateless which means as soon as we
// log in the server will not remeber our user
// so we need to find a way to tell our server that hey this particular user has signed in
// to do this we use a third party pacakge called JSON web Token
// which creates a speical token and assignes it to a user who logs in
// so upon every request the user will pass that token to our server 
// and our server is going to chekc if that token is valid or not

const jwt = require('jsonwebtoken');

const generateToken = id=>{
    return jwt.sign({id}, 'anykey', {expiresIn: '10d'}) // we can asign it any user propery like email etc but the user id is unique
    //expires in tells us when the user token will expire which then our server will force user to log back in in our case it takes 10 days
};

module.exports = generateToken; // so now when a user logs in we are going to genrate a token for specific user
