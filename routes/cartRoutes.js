const router = require('express').Router();
const cartData = require('../controllers/cartController');

let cartObj = new cartData();

router.post('/addtocart', async function (req, res) {
    try {
        let response = await cartObj.addToCart(req);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get('/viewcart', async function (req, res) {
    try {
        let response = await cartObj.viewCart();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/purchaseproduct', async function (req, res) {
    try {
        let response = await cartObj.purchaseProduct(req);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/purschaseallproducts', async function (req, res) {
    try {
        let response = await cartObj.purchaseAllProducts(req);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/removeproductfromcart', async function (req, res) {
    try {
        let response = await cartObj.removeProductFromCart(req);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get('/removeallproductsfromcart', async function (req, res) {
    try {
        let response = await cartObj.removeAllProductFromCart();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;
