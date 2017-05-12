let Post = require('./buzz.model')
exports.createPost = (postData,res) => {

    Post.create(postData,(err,data) => {
        if(err){
            res.send("error occured in creating post");
        }

        if(data){
            res.send(data);
        }
    })

}

exports.getPosts = (res) => {   //get all posts
    Post.find({},(err,data) => {
        if(err){
            res.send(err);
        }else{
            res.send(data)
        }

    })
}

exports.getSpecificPosts = (email,res) => {   //get all posts

    Post.find({"user_email":email},(err,data) => {
        if(err){
            res.send(err);
        }else{
            res.send(data)
        }
    })
}