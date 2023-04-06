const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

class clsUser {

    async insertUser(req) {

        try {

            let first_name_key = UTILS.formatString(req.body.first_name);
            let last_name_key = UTILS.formatString(req.body.last_name);

            let userKey = first_name_key + "_" + last_name_key;

            let fullName = req.body.first_name + " " + req.body.last_name;

            let userFound = await userModel.findOne({ contact_no: req.body.contact_no, isDelete: false });

            let passwd = await bcrypt.hash(req.body.password, 12);

            if (userFound) {

                let responses = {
                    data: null,
                    message: 'User already exists',
                    status: 200,
                    error: null
                };

                return responses;

            }
            else {

                let userPost = new userModel({
                    user_id: "USER_" + userKey + "_" + req.body.contact_no,
                    first_name: req.body.first_name,
                    middle_name: req.body.middle_name,
                    last_name: req.body.last_name,
                    full_name: fullName,
                    contact_no: req.body.contact_no,
                    email: req.body.email,
                    password: passwd,
                    gender: req.body.gender,
                    date_of_birth: req.body.date_of_birth,
                    current_address: req.body.current_address,
                    permanent_address: req.body.permanent_address,
                    district: req.body.district,
                    state: req.body.state,
                    country: req.body.country,
                    role: "User",
                    user_key: userKey
                });

                let response = await userPost.save();

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
            }

            return responses;

        }

    }

    async insertAdmin(req) {

        try {

            let first_name_key = UTILS.formatString(req.body.first_name);
            let last_name_key = UTILS.formatString(req.body.last_name);

            let userKey = first_name_key + "_" + last_name_key;

            let fullName = req.body.first_name + " " + req.body.last_name;

            let userFound = await userModel.findOne({ contact_no: req.body.contact_no, role: "Admin", isDelete: false });

            let passwd = await bcrypt.hash(req.body.password, 12);

            if (userFound) {

                let responses = {
                    data: null,
                    message: 'Admin already exists',
                    status: 200,
                    error: null
                };

                return responses;

            }
            else {

                let userPost = new userModel({
                    user_id: "ADMIN_" + userKey + "_" + req.body.contact_no,
                    first_name: req.body.first_name,
                    middle_name: req.body.middle_name,
                    last_name: req.body.last_name,
                    full_name: fullName,
                    contact_no: req.body.contact_no,
                    email: req.body.email,
                    password: passwd,
                    gender: req.body.gender,
                    date_of_birth: req.body.date_of_birth,
                    current_address: req.body.current_address,
                    permanent_address: req.body.permanent_address,
                    district: req.body.district,
                    state: req.body.state,
                    country: req.body.country,
                    role: "Admin",
                    user_key: userKey
                });

                let response = await userPost.save();

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
            }

            return responses;

        }

    }

    async getAllUsers() {

        try {

            let userData = await userModel.find({ isDelete: false });

            if (userData.length > 0) {

                let responses = {
                    data: userData,
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

    async getUserWithContactNo(req) {

        try {

            let userData = await userModel.findOne({ contact_no: req.body.contact_no, isDelete: false });

            if (userData) {

                let responses = {
                    data: userData,
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

    async getUserWithName(req) {

        try {

            let searchFullName = req.body.full_name

            let userData = await userModel.findOne({ full_name: { $regex: "^" + searchFullName }, isDelete: false });

            if (userData) {

                let responses = {
                    data: userData,
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

    async updateUserDetails(req) {

        try {

            let newData = req.body;

            let updateUser = await userModel.findOneAndUpdate(
                {
                    contact_no: req.body.contact_no,
                    isDelete: false
                },
                newData,
                {
                    new: true
                }
            );

            let responses = {
                data: updateUser,
                message: 'User updated successfully',
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

    async deleteUser(req) {

        try {

            let deleteUser = await userModel.findOneAndUpdate(
                {
                    contact_no: req.body.contact_no,
                    isDelete: false
                },
                {
                    isDelete: true
                },
                {
                    new: true
                }
            );

            let responses = {
                data: deleteUser,
                message: 'User deleted successfully',
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

    async forgotPassword(req) {

        try {

            let newPassword = await bcrypt.hash(req.body.password, 12);

            let response = await user.findOneAndUpdate(
                {
                    contact_no: req.body.contact_no,
                    isDelete: false
                },
                {
                    password: newPassword
                },
                {
                    new: true
                }
            );

            let responses = {
                data: response,
                message: 'Password changed successfully',
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

module.exports = clsUser;