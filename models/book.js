const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // string for author(s)
    authors: {
        type: String,
        default: ""
    },
    // book description
    description: {
        type: String,
        default: "",
    },
    // url for thumbnail image
    image: {
        type: String,
        default: ""
    },
    // url for book information link
    link: {
        type: String,
        default: "",
        unique: true
    }
});

const book = mongoose.model("book", bookSchema);

module.exports = book;
