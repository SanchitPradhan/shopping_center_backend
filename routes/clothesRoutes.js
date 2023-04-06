const router = require('express').Router();
const clothesData = require('../controllers/clothesController');

let clothesObj = new clothesData();

router.post('/insertclothes', async function (req, res) {
    try {
        let response = await clothesObj.insertClothes(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get('/getallclothes', async function (req, res) {
    try {
        let response = await clothesObj.getAllClothes()
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getclotheswithtype', async function (req, res) {
    try {
        let response = await clothesObj.getClothesWithType(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getclotheswithname', async function (req, res) {
    try {
        let response = await clothesObj.getClothesWithName(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/updateclothesdiscount', async function (req, res) {
    try {
        let response = await clothesObj.updateClothesDiscount(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;