const clothesModel = require('../models/clothesModel');

class clsClothes {

    async insertClothes(req) {

        try {

            price = req.body.price;
            discount = req.body.discount;

            discountedPrice = price - (price * discount / 100);

            let name_key = UTILS.formatString(req.body.name);
            let type_key = UTILS.formatString(req.body.brand);

            let clothesKey = name_key + "_" + type_key;

            let clothesData = await clothesModel.findOne({ name: req.body.name });

            if (clothesData) {

                let responses = {
                    data: null,
                    message: 'This item already exists',
                    status: 200,
                    error: null
                }

                return responses;

            }
            else {

                let clothesDataPost = new clothesModel({
                    product_id: "CLOTHES_" + clothesKey,
                    name: req.body.name,
                    description: req.body.description,
                    type: req.body.type,
                    images: req.body.images,
                    price: req.body.price,
                    discount: req.body.discount,
                    discounted_price: discountedPrice,
                    clothes_key: clothesKey
                });

                let response = await clothesDataPost.save();

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

    async getAllClothes() {

        try {

            let clothesData = await clothesModel.find({});

            if (clothesData.length > 0) {

                let responses = {
                    data: clothesData,
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

    async getClothesWithType(req) {

        try {

            let clothesData = await clothesModel.find({ type: req.body.type });

            if (clothesData.length > 0) {

                let responses = {
                    data: clothesData,
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

    async getClothesWithName(req) {

        try {

            let searchName = req.body.name;
            let clothesData = await clothesModel.findOne({ name: { $regex: "^" + searchName } });

            if (clothesData) {

                let responses = {
                    data: clothesData,
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

    async updateClothesDiscount(req) {

        try {

            let updateDiscount = await clothesModel.findOneAndUpdate(
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

module.exports = clsClothes;