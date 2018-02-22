const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');

const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');

const registerRouter = require('./routers/register');
const loginRouter = require('./routers/login')

const notesRouter = require('./routers/notes');
const configurePassport = require('./passport/config');

mongoose.connect('mongodb://localhost:27017/NotesApp');

configurePassport(passport)
app.use(passport.initialize())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieparser())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use((error, req, res, next) => {
    res.status(500).send('internal error occurred')
    next()
});


app.use('/user',registerRouter);
app.use('/user',loginRouter);;

app.use('/notes',notesRouter)

app.listen(3001,()=>{
    console.log('started')
})