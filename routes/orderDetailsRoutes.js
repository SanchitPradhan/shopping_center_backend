const router = require('express').Router();
const orderDetailsData = require('../controllers/orderDetailsController');

let orderDetailsObj = new orderDetailsData();

router.post('/createorderdetails', async function (req, res) {
    try {
        let response = await orderDetailsObj.createOrderDetails(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get('/getallorderdetails', async function (req, res) {
    try {
        let response = await orderDetailsObj.getAllOrderDetails()
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getorderdetailsforuser', async function (req, res) {
    try {
        let response = await orderDetailsObj.getAllOrderDetailsForUser(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;

