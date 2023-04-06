const laptopsModel = require('../models/laptopsModel');

class clsLaptops {

    async insertLaptops(req) {

        try {

            price = req.body.price;
            discount = req.body.discount;

            let name_key = UTILS.formatString(req.body.name);
            let brand_key = UTILS.formatString(req.body.brand);

            let laptopKey = name_key + "_" + brand_key;

            discountedPrice = price - (price * discount / 100);

            let laptopsData = await laptopsModel.findOne({ name: req.body.name });

            if (laptopsData) {

                let responses = {
                    data: null,
                    message: 'Laptop already exists',
                    status: 200,
                    error: null
                }

                return responses;

            }
            else {

                let laptopsDataPost = new laptopsModel({
                    product_id: "LAPTOP_" + laptopKey,
                    name: req.body.name,
                    description: req.body.description,
                    brand: req.body.brand,
                    images: req.body.images,
                    price: req.body.price,
                    discount: req.body.discount,
                    discounted_price: discountedPrice,
                    laptop_key: laptopKey
                });

                let response = await laptopsDataPost.save();

                let responses = {
                    data: response,
                    status: 200,
                    error: null
                }

                return responses;

            }

        } catch (error) {

            let responses = {
                error: error,
                status: 500,
                data: null
            }

            return responses;

        }

    }

    async getAllLaptops() {

        try {

            let laptopsData = await laptopsModel.find({});

            if (laptopsData.length > 0) {

                let responses = {
                    data: laptopsData,
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

                return responses

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

    async getLaptopsWithBrand(req) {

        try {

            let laptopsData = await laptopsModel.find({ brand: req.body.brand });

            if (laptopsData.length > 0) {

                let responses = {
                    data: laptopsData,
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

                return responses

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

    async getLaptopWithName(req) {

        try {

            let searchName = req.body.name;
            let laptopsData = await laptopsModel.findOne({ name: { $regex: "^" + searchName } });

            if (laptopsData) {

                let responses = {
                    data: laptopsData,
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

                return responses

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

    async updateLaptopDiscount(req) {

        try {

            let updateDiscount = await laptopsModel.findOneAndUpdate(
                {
                    name: req.body.name
                },
                {
                    discount: req.body.discount
                },
                {
                    new: true
                }
            );

            let responses = {
                data: updateDiscount,
                message: 'Discount updated',
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

module.exports = clsLaptops;