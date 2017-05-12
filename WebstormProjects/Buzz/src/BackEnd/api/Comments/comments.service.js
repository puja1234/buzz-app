var Comment = require('./comments.model');

exports.getAllComments = ( res ) => {
    Comment.find({}, function (err, comment) {
        if(err) { return handleError(res, err); }
        if(!comment) { return res.status(404).send('Not Found'); }
        return res.json(comment);
    }).sort({time : -1});
}

exports.getSingleComment = ( postID,res ) => {
    Comment.find({postId : postID}, (err, comment) =>{
        if(err) { return handleError(res, err); }
        if(!comment) { return res.status(404).send('Not Found'); }
        return res.json(comment);
    }).sort({time : -1});
}