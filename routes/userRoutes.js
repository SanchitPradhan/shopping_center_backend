const router = require('express').Router();
const userData = require('../controllers/userController');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const passport = require("passport"), LocalStrategy = require("passport-local").Strategy;
const userModels = require('../models/userModel');

let userOBJ = new userData();

passport.serializeUser(function (user, done) {
    done(null, user.user_id);
});

passport.deserializeUser(function (user_id, done) {
    userModels.findById(user_id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({ usernameField: 'contact_no', passReqToCallback: true }, (req, contact_no, password, done) => {
    console.log("User contact_no...", contact_no);
    console.log("User password...", password);

    userModels.findOne({ contact_no: contact_no }).then(user => {
        console.log('user----------',user)
        if (user === null) {
            return done(null, false, { message: 'User number not not found' });
        }
        let userData = [];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) { console.log(err); }
            if (isMatch) {
                userData = user;
                jwt.sign({ userData }, 'secretkey', (err, token) => {
                    let data = {
                        user: userData,
                        token: token
                    }

                    console.log("token response", data);
                    return done(null, data);
                });

            }
            else {
                return done(null, false, { message: 'Password incorrect' })
            }
        });
    })
        .catch(err => {
            console.log(err);
            return err;
        });
})

);

router.post("/login", async (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        console.log('user==========',user)
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            if (info.message === 'User number not not found') {
                return res.status(400).json({ errors: "No user found" });
            } else {
                return res.status(400).json({ errors: "Something went wrong" });
            }

        }
        req.logIn(user, function (err) {
            if (user) {
                let data = {
                    user: user

                }
                return res.status(200).json(data);

            }
        });
    })(req, res, next);
});

router.post('/insertuser', async function (req, res) {
    try {
        let response = await userOBJ.insertUser(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/insertadmin', async function (req, res) {
    try {
        let response = await userOBJ.insertAdmin(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get('/getalluser', async function (req, res) {
    try {
        let response = await userOBJ.getAllUsers(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getuserwithcontactno', async function (req, res) {
    try {
        let response = await userOBJ.getUserWithContactNo(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getuserwithname', async function (req, res) {
    try {
        let response = await userOBJ.getUserWithName(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/updateuserdetails', async function (req, res) {
    try {
        let response = await userOBJ.updateUserDetails(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/deleteuser', async function (req, res) {
    try {
        let response = await userOBJ.deleteUser(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/forgotpassword', async function (req, res) {
    try {
        let response = await userOBJ.forgotPassword(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;