var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    Post.find({}).exec((err, posts) => {
        if(err || !posts) {
            return res.sendStatus(403);
        }

        res.send(posts).status(200);
    })
});

module.exports = router;