var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Post = require('../models/Post');

router.get('/users', (req, res) => {
    User.find({}).exec((err, users) => {
        (err || !users) ? res.sendStatus(403) : res.send(users).status(200);
    })
});

router.post('/post', (req, res) => {
    console.log(req.body);
    var post = new Post({
        author: req.user._id,
        title: req.body.title,
        desc: req.body.desc,
        text: req.body.text,
        readTime: parseInt(req.body.readTime)
    })

    post.save((err) => {
        err ? res.send(err).status(403) : res.send(post).status(200);
    })
})

module.exports = router;