const mobilesModel = require('../models/mobilesModel');
const UTILS = require('../utils/index');

class clsMobiles {

    async insertMobile(req) {

        try {

            let price = req.body.price;
            let discount = req.body.discount;

            let discountedPrice = price - (price * discount / 100);

            let name_key = UTILS.formatString(req.body.name);
            let brand_key = UTILS.formatString(req.body.brand);

            let mobileKey = name_key + "_" + brand_key;

            let mobilesData = await mobilesModel.findOne({ name: req.body.name });

            if (mobilesData) {

                let responses = {
                    data: null,
                    message: 'Mobile already exists',
                    status: 200,
                    error: null
                }

                return responses;

            }
            else {

                let mobilesDataPost = new mobilesModel({
                    product_id: "MOBILE_" + mobileKey,
                    name: req.body.name,
                    description: req.body.description,
                    brand: req.body.brand,
                    color: req.body.color,
                    images: req.body.images,
                    price: req.body.price,
                    discount: req.body.discount,
                    discounted_price: discountedPrice,
                    mobile_key: mobileKey
                });

                let response = await mobilesDataPost.save();

                let responses = {
                    data: response,
                    status: 200,
                    error: null
                }

                return responses;

            }

        } catch (error) {

            console.log('error=================', error);

            let responses = {
                error: error,
                status: 500,
                data: null
            }

            return responses;

        }

    }

    async getAllMobiles() {

        try {

            let mobilesData = await mobilesModel.find({});

            if (mobilesData.length > 0) {

                let responses = {
                    data: mobilesData,
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

    async getMobilesWithBrand(req) {

        try {

            let mobilesData = await mobilesModel.find({ brand: req.body.brand });

            if (mobilesData.length > 0) {

                let responses = {
                    data: mobilesData,
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

    async getMobileWithName(req) {

        try {

            let searchName = req.body.name;
            let mobilesData = await mobilesModel.findOne({ name: { $regex: "^" + searchName } });

            if (mobilesData) {

                let responses = {
                    data: mobilesData,
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

    async updateMobileDiscount(req) {

        try {

            let updateDiscount = await mobilesModel.findOneAndUpdate(
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

module.exports = clsMobiles;