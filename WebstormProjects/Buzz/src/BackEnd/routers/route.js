const expressSession = require('express-session')
const passport = require('passport');
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const multer	=	require('multer');

const GoogleStratergy = require('./../Authentication/googleAuth');
let upload = multer({dest:'files/'});
let buzz_controller = require('./../api/Buzz/buzz.controller.js');
let user_controller = require('./../api/Users/user.controller.js');

module.exports = (app) => {

    app.use(
        expressSession({secret:'123456789'}),
        passport.initialize(),
        passport.session());

    GoogleStratergy.googleConst();

    app.use(bodyParser());


    app.get("/api/login",passport.authenticate('google',{scope:["profile","email"]}));
    app.get("/api/logout",function (req,res) {
        req.logout();
        res.redirect('/');
    })

    // const logger = (req,res,next) => {
    //     console.log(req.url,"req url")
    //     if(req.url!='http://localhost:3000/'){
    //         if(req.user==null){
    //             res.redirect('/')
    //         }else{
    //             next();
    //         }
    //     }
    // }
    //
    // app.use(logger);



    app.get("/auth/google/callback",passport.authenticate('google',{
        successRedirect:"http://localhost:3000/home",
        failureRedirect:"http://localhost:3000/profile"
    }));


    app.get('/User',user_controller.getSpecificUser);
    app.get('/api/UserSpecifcPost',buzz_controller.getSpecificPost);
    // app.put('/api/likePost',)

    app.post('/Buzz',upload.single('image'),buzz_controller.createPost);


    app.get('/Buzz',buzz_controller.getPost);

    app.get('/*', function (req, res) {
        res.sendfile('./src/index.html')
    })
}