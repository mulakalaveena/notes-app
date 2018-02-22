const mongoose = require('mongoose')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

var userSchema = mongoose.Schema({
    username:{
        type:  String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    tokens:[String]
})


userSchema.pre('save',function(next){
    var user =this;
    if(user.isModified('password')){
        argon2.hash(user.password)
        .then(hash=>{
            user.password=hash;
            next()
        })
        .catch(error=>{
            next()
        })
    }else{
        next();
    }
})
userSchema.methods.saveToken=function(){
    let token = jwt.sign({id:this.id},'lovevolleyball')
    this.tokens.push(token)
    return this.save();
}
userSchema.methods.verifyPassword=function(userSubmittedPassword){
    return argon2.verify(this.password,userSubmittedPassword)
}
userSchema.statics.verifyToken=function(token){
    var decodedtoken=jwt.verify(token,'lovevolleyball')
    return this.findById(decodedtoken.id);

}
userSchema.statics.generateHash = function (password) {
    return argon2.hash(password);
}
const user = mongoose.model('user',userSchema)
module.exports = exports=user