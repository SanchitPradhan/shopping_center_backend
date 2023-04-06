const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartModel = new Schema({
    cart_id: {
        type: String
    },
    product_id: {
        type: String
    },
    product_name: {
        type: String
    },
    product_quantity: {
        type: Number
    },
    product_price: {
        type: Number
    },
    total_quantity: {
        type: Number
    },
    total_price: {
        type: Number
    },
    isBuy: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('carts', cartModel);