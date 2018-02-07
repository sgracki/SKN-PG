var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    desc: String,
    text: String,
    readTime: Number
});

module.exports = mongoose.model('Post', postSchema);
