const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    user_id: {
        type: String
    },
    first_name: {
        type: String
    },
    middle_name: {
        type: String
    },
    last_name: {
        type: String
    },
    full_name: {
        type: String
    },
    contact_no: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String,
        Enum: ['Male', 'Female', 'Others']
    },
    date_of_birth: {
        type: Date
    },
    current_address: {
        type: String
    },
    permanent_address: {
        type: String
    },
    district: {
        type: String,
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    role: {
        type: String,
        Enum: ['User', 'Admin']
    },
    user_key: {
        type: String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('users', userModel)