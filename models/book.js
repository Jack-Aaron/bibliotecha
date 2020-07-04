const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    // string for author(s)
    authors: {
        type: Array,
        default: []
    },
    // book description
    description: {
        type: String,
        default: '',
    },
    // url for thumbnail image
    image: {
        type: String,
        default: ''
    },
    // url for book information link
    link: {
        type: String,
        default: '',
        unique: true
    },
    googleId: {
        type: String,
        default: '',
        unique: true,
        required: true
    }
});

const book = mongoose.model('book', bookSchema);

module.exports = book;
