const mongoose = require('mongoose')
const router = require("express").Router();
const note = require("../models/note");
const tokenAuth = require("../middleware/tokenauth");

function createHandler(req, res, next) {
    var newNote = new note({
        title: req.body.title,
        body: req.body.body,
        user: req.currentUser.id,
    });
    newNote.save()
        .then(note => {
            res.json({
                success: true,
                message:'note created'
            });
        })
        .catch(error => {
            next(error);
        })

}

function deleteHandler(req, res, next) {
    note.findOneAndRemove({ user: req.currentUser.id }).exec()
        .then(removedNote => {
            if (!removedNote) {
                res.json({
                    success: false,
                    error: "No note found"
                })
            } else {
                res.json({
                    success: true,
                    message:'note found'
                })
            }
        })
        .catch(error => {
            next(error);
        })
}

function listHandler(req, res, next) {
    note.find({ user: req.currentUser.id})
    .exec()
    .then(notes => {
        if(note){
            res.json({
                success: true,
                result: notes,
            });
        }
        else{
            res.json({
                success:false,
                message:'no note found'
            })
        }
        
    })
    .catch(error => {
        next(error);
    });
}
function updateNoteHandler(req,res,next){
    note.findOneAndUpdate({
        title:req.body.title,
        user:req.currentUser.id
    },{
        $set:{
            body:req.body.body
        }
    })
    .then(user=>{
        if(user){
            res.json({
                success:true,
                message:"note updated"
            })
        }else{
            res.json({
                message:"note not found"
            })
        }
    })
    .catch(error=>{
        next(error)
    })
}
router.use(tokenAuth)

router.post("/create", createHandler)

router.post("/delete", deleteHandler)

router.get("/list", listHandler)
router.patch("/update",updateNoteHandler)

module.exports = exports = router;
