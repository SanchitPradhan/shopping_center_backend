const cartModel = require('../models/cartModel');

class clsCart {

    async addToCart(req) {

        try {

            let productDetails = await cartModel.findOne({ product_id: req.body.product_id, isBuy: false });

            if (productDetails.length > 0) {

                let incQuantity = await cartModel.findOneAndUpdate(
                    {
                        product_id: req.body.product_id,
                        isBuy: false
                    },
                    {
                        $inc: { product_quantity: 1 }
                    },
                    {
                        new: true
                    }
                );

                let responses = {
                    data: incQuantity,
                    status: 200,
                    error: null
                };

                return responses;

            }
            else {

                let cartPost = new cartModel({
                    cart_id: "CART",
                    product_id: req.body.product_id,
                    product_name: req.body.product_name,
                    product_quantity: req.body.product_quantity,
                    product_price: req.body.product_price,
                });

                let response = await cartPost.save();

                let responses = {
                    data: response,
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

    async viewCart() {

        try {

            let cartDetails = await cartModel.find({ isBuy: false });

            if (cartDetails.length > 0) {

                let responses = {
                    data: cartDetails,
                    status: 200,
                    error: null
                };

                return responses;

            }
            else {

                let responses = {
                    data: null,
                    message: "Cart is empty",
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

    async purchaseProduct(req) {

        try {

            let productDetails = await cartModel.findOneAndUpdate(
                {
                    product_id: req.body.product_id
                },
                {
                    isBuy: true
                },
                {
                    new: true
                }
            );

            let responses = {
                data: productDetails,
                message: "Purchase Successful",
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

    async purchaseAllProducts(req) {

        try {

            let productDetails = await cartModel.updateMany(
                {
                    cart_id: req.body.cart_id,
                    isBuy: false
                },
                {
                    isBuy: true
                }
            );

            let responses = {
                data: productDetails,
                message: "Purchase Successful",
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

    async removeProductFromCart(req) {

        try {

            let removeProduct = await cartModel.findOneAndDelete(
                {
                    product_id: req.body.product_id,
                    isBuy: false
                }
            );

            let responses = {
                data: removeProduct,
                message: "Product removed from cart successfully",
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

    async removeAllProductFromCart() {

        try {

            let removeProduct = await cartModel.findOneAndDelete(
                {
                    isBuy: false
                }
            );

            let responses = {
                data: removeProduct,
                message: "Cart cleared successfully",
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


}

module.exports = clsCart;
