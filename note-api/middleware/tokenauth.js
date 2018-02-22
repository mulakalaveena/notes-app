const express=require('express')
const app = express();
const user = require('../models/user')
const cookieParser = require('cookie-parser')

app.use(cookieParser())

function tokenMiddleware(req,res,next){
    var token=req.cookies.token;
    user.verifyToken(token)
    .then(user=>{
        if(user){
            req.currentUser=user
            next()
        }else{
            res.send('user not found' )
        }
    })
    .catch(error=>{
        next(error)
    })
}
module.exports=exports=tokenMiddleware