const booksModel = require('../models/booksModel');

class clsBooks {

    async insertBooks(req) {

        try {

            price = req.body.price;
            discount = req.body.discount;

            discountedPrice = price - (price * discount / 100);

            let name_key = UTILS.formatString(req.body.name);
            let genre_key = UTILS.formatString(req.body.genre);

            let bookKey = name_key + "_" + genre_key;

            let booksData = await booksModel.findOne({ name: req.body.name });

            if (booksData) {

                let responses = {
                    data: null,
                    message: 'Book already exists',
                    status: 200,
                    error: null
                }

                return responses;

            }
            else {

                let booksDataPost = new booksModel({
                    product_id: "BOOK_" + bookKey,
                    name: req.body.name,
                    description: req.body.description,
                    genre: req.body.genre,
                    images: req.body.images,
                    price: req.body.price,
                    discount: req.body.discount,
                    discounted_price: discountedPrice,
                    book_key: bookKey
                });

                let response = await booksDataPost.save();

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

    async getAllBooks() {

        try {

            let booksData = await booksModel.find({});

            if (booksData.length > 0) {

                let responses = {
                    data: booksData,
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

    async getBooksWithGenre(req) {

        try {

            let booksData = await booksModel.find({ genre: req.body.genre });

            if (booksData.length > 0) {

                let responses = {
                    data: booksData,
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

    async getBooksWithName(req) {

        try {

            let searchName = req.body.name;
            let booksData = await booksModel.findOne({ name: { $regex: "^" + searchName } });

            if (booksData) {

                let responses = {
                    data: booksData,
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

    async updateBooksDiscount(req) {

        try {

            let updateDiscount = await booksModel.findOneAndUpdate(
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

module.exports = clsBooks;