const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laptopsModel = new Schema({
    product_id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    brand: {
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
    laptop_key: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('laptops', laptopsModel);