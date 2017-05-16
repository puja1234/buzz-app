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
let comment_controller = require('./../api/Comments/comments.controller');

module.exports = (app) => {

    app.use(
        expressSession({secret:'123456789'}),
        passport.initialize(),
        passport.session());

    GoogleStratergy.googleConst();

    app.use(bodyParser());


    app.get("/api/login",passport.authenticate('google',{scope:["profile","email"]}));
    app.get("/api/logout",function (req,res) {
        req.session.destroy(function() {
            req.logout();
            res.redirect('/');
        });
    })
    app.get("/auth/google/callback",passport.authenticate('google',{
        successRedirect:"http://localhost:3000/home",
        failureRedirect:"http://localhost:3000/"
    }));


    app.get('/User',user_controller.getSpecificUser);
    app.get('/api/UserSpecifcPost',buzz_controller.getSpecificPost);
    // app.put('/api/likePost',)

    app.post('/Buzz',upload.single('image'),buzz_controller.createPost);


    app.get('/Buzz',buzz_controller.getPost);
    app.put('/api/likeDislike',buzz_controller.updateLikes);
    app.put('/api/comment',comment_controller.create);
    app.get('/api/getComments',comment_controller.getComments)

    loggedIn = (req, res, next) => {
        if (req.url == "/") {
            if (req.user) {
                res.redirect("/home")
            }
            next();
        } else if (req.user) {
            next()
        } else {
            res.redirect("/")
        }
    }
    app.get('/*',loggedIn, function (req, res) {
        res.sendfile('./src/index.html')
    })
}