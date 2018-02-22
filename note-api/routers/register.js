const router = require('express').Router();
const user = require('../models/user');



// Handler for registering user
function registerRouter(req, res, next){
    var newUser  = new user({
        username: req.body.username,
        password: req.body.password
    })
    return newUser.save()
    .then(user => {
        res.json({
            success: true,
            result: user.username,
        })
    })
    .catch(error => {
        next(error);
    })
}



router.post('/register', registerRouter);

module.exports = exports = router;
