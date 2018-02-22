const router = require('express').Router()
const user = require('../models/user')
const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy

function loginHandler(req,res,next){
    user.findOne({
        username:req.body.username
    })
    .then(user=>{
        return user.saveToken();
    })
    .then(user=>{
        res.clearCookie('token')
        res.cookie('token',user.tokens[user.tokens.length-1],{encode:String})
        res.json({
            success:true
        })
    })
    .catch(error=>{
        next(error)
    })
}
router.post('/login',passport.authenticate("local",{session:false}),loginHandler)



module.exports=exports=router