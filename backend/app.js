const express = require('express')
const app = express()
const secrets = require('./secrets');
const mongoose = require('mongoose');

app.use('/', express.static('../frontend'));
app.use('/admin', express.static('../admin'));

mongoose.connect(secrets.db);
mongoose.connection.on('error', function () {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});
mongoose.Promise = global.Promise;

app.listen(3000, () => console.log('Example app listening on port 3000!'))