const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    content: String,
});

module.exports = mongoose.model('Comment', reviewSchema);