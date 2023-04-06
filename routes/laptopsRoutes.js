const router = require('express').Router();
const laptopsData = require('../controllers/laptopsController');

let laptopsObj = new laptopsData();

router.post('/insertlaptop', async function (req, res) {
    try {
        let response = await laptopsObj.insertLaptops(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get('/getalllaptop', async function (req, res) {
    try {
        let response = await laptopsObj.getAllLaptops()
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getlaptopswithbrand', async function (req, res) {
    try {
        let response = await laptopsObj.getLaptopsWithBrand(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getlaptopswithname', async function (req, res) {
    try {
        let response = await laptopsObj.getLaptopWithName(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/updatelaptopdiscount', async function (req, res) {
    try {
        let response = await laptopsObj.updateLaptopDiscount(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;