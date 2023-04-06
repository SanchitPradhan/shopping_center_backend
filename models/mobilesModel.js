const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mobilesModel = new Schema({
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
    color: {
        type: Array
    },
    images: {
        type: Array
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
    mobile_key: {
        type: String
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('mobiles', mobilesModel);