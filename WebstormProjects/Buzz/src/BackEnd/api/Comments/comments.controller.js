'use strict';
var commentService = require('./comments.service');

// // Get list of comments
// exports.getAllComments = function(req, res) {
//     console.log('get all comments -controller');
//     commentService.getAllComments(res);
// };
//
// // Get a single comment
// exports.getSingleComment = function(req, res) {
//     var postID = req.param.id;
//     console.log('get single comment -controller');
//     commentService.getComment(postID,res)
// };

// Creates a new comment in the DB.
exports.create = (req, res)=> {
    let commentData = req.body.commentPost;
    commentService.create(commentData,res);
};

exports.getComments = (req,res) => {
    commentService.getComments(res);
}
// Updates an existing comment in the DB.
// exports.update = function(req, res) {
//     if(req.body._id) { delete req.body._id; }
//     Comment.findById(req.params.id, function (err, comment) {
//         if (err) { return handleError(res, err); }
//         if(!comment) { return res.status(404).send('Not Found'); }
//         var updated = _.merge(comment, req.body);
//         updated.save(function (err) {
//             if (err) { return handleError(res, err); }
//             return res.status(200).json(comment);
//         });
//     });
// };
//
// // Deletes a comment from the DB.
// exports.destroy = function(req, res) {
//     Comment.findById(req.params.id, function (err, comment) {
//         if(err) { return handleError(res, err); }
//         if(!comment) { return res.status(404).send('Not Found'); }
//         comment.remove(function(err) {
//             if(err) { return handleError(res, err); }
//             return res.status(204).send('No Content');
//         });
//     });
// };
//
// function handleError(res, err) {
//     return res.status(500).send(err);
// }
