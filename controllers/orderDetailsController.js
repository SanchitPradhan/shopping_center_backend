const orderDetails = require('../models/orderDetailsModel');
const userDetails = require('../models/userModel');

class clsOrderDetails {

    async createOrderDetails(req) {

        try {

            let timestamp = new Date().valueOf();

            let userRes = await userDetails.findOne({ user_id: req.body.user_id })

            let orderId = "ORDER_" + userRes.user_key + "_" + timestamp;

            let orderDetailsPost = new orderDetails({
                user_id: req.body.user_id,
                order_id: orderId,
                user_full_name: userRes.first_name + " " + userRes.last_name,
                user_email: userRes.email,
                user_contact_no: userRes.contact_no,
                product_id: req.body.product_id,
                product_name: req.body.product_name,
                product_quantity: req.body.product_quantity,
                product_price: req.body.product_price
            });

            let response = await orderDetailsPost.save();

            let responses = {
                data: response,
                status: 200,
                error: null
            };

            return responses;

        } catch (error) {

            let responses = {
                error: error,
                status: 500,
                data: null
            };

            return responses;

        }

    }

    async getAllOrderDetails() {

        try {

            let orderDetailsRes = await orderDetails.find({});

            if (orderDetailsRes.length > 0) {

                let responses = {
                    data: orderDetailsRes,
                    status: 200,
                    error: null
                };

                return responses;

            }
            else {

                let responses = {
                    data: null,
                    message: 'No Data Found',
                    status: 200,
                    error: null
                };

                return responses;

            }


        } catch (error) {

            let responses = {
                error: error,
                status: 500,
                data: null
            };

            return responses;

        }

    }

    async getAllOrderDetailsForUser(req) {

        try {

            let orderDetailsRes = await orderDetails.find({ user_id: req.body.user_id });

            if (orderDetailsRes.length > 0) {

                let responses = {
                    data: orderDetailsRes,
                    status: 200,
                    error: null
                };

                return responses;

            }
            else {

                let responses = {
                    data: null,
                    message: 'No Data Found',
                    status: 200,
                    error: null
                };

                return responses;

            }


        } catch (error) {

            let responses = {
                error: error,
                status: 500,
                data: null
            };

            return responses;

        }

    }

}

module.exports = clsOrderDetails;