'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    user : {
        userName: String,
        userImage:String
    },
    cratedAt:String,
    updatedAt:String,
    content : String,
    time : String,
    postId : String
});

module.exports = mongoose.model('Comment', CommentSchema);
