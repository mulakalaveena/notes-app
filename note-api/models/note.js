
const mongoose = require('mongoose')
const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:2,
        max:10
    },
    body:{
        type:String,
        required:true,
        min:2,
        max:10
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const note = mongoose.model('notes',noteSchema)
module.exports=exports=note