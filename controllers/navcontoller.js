const posts = require('../models/navdata');


exports.sendPosts = () => {
    const myposts = posts.getPosts();
    myposts.forEach( post => {
        return post;
    })
}