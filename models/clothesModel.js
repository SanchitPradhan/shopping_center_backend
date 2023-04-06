const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clothesModel = new Schema({
    product_id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    type: {
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
    clothes_key: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('clothes', clothesModel);