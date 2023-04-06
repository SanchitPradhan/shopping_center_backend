const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDetailsModel = new Schema({
    user_id: {
        type: String
    },
    order_id: {
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
    user_full_name: {
        type: String
    },
    user_contact_no: {
        type: String
    },
    user_email: {
        type: String
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('orderdetails', orderDetailsModel);