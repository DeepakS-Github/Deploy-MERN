const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    author:String,
    quote:String
});

module.exports = mongoose.model('blogs',blogSchema);