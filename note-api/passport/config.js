const passport=require('passport')
const LocalStrategy = require('passport-local').Strategy
const user = require('../models/user')
function verify(username,password,done){
    user.findOne({username:username})
    .then(user=>{
        if(!user){
            return(done,false)
        }else{
            user.verifyPassword(password)
            .then(same=>{
                if(same){
                    return done(null,true)
                }
                else{
                    done(null,false)
                }
            })
        }
    })
    .catch(error=>{
        done(error)
    })
}
let configurePassport = (passport)=>{
    passport.use(new LocalStrategy(verify))
}
module.exports = exports = configurePassport;



