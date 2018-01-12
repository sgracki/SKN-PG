var express = require('express');
var router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    Post.find({}).populate('author').exec((err, posts) => {
        (err || !posts) ? res.sendStatus(403) : res.send(posts).status(200);
    })
});

router.get('/user', (req, res) => {
    res.send(req.user ? req.user : {});
})

module.exports = router;