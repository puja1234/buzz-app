'use strict'
var mongoose = require('mongoose')
Schema = mongoose.Schema;

var likeSchema = Schema({
    createdAt:Date,
    updatedAt:Date,
    likeCount:{
        type:Number,
        default:0
    },
    dislikeCount:{
        type:Number,
        default:0
    },
    user_email:{
        type:String
    },
    Buzz_id:{
        type:String
    }
})

model.exports = mongoose.model('Likes',likeSchema);