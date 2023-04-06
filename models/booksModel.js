const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksModel = new Schema({
    product_id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    discount: {
        type: Number
    },
    discounted_price: {
        type: Number
    },
    book_key: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('books', booksModel);