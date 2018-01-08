var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.types.mixed, ref: 'User'},
    title: String,
    desc: String,
    text: String,
    readTime: Number
});

module.exports = mongoose.model('Post', postSchema);
