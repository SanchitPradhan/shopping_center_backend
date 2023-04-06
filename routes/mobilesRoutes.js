const router = require('express').Router();
const mobilesData = require('../controllers/mobilesController');

let mobilesObj = new mobilesData();

router.post('/insertmobile', async function (req, res) {
    try {
        let response = await mobilesObj.insertMobile(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get('/getallmobile', async function (req, res) {
    try {
        let response = await mobilesObj.getAllMobiles()
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getmobileswithbrand', async function (req, res) {
    try {
        let response = await mobilesObj.getMobilesWithBrand(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getmobileswithname', async function (req, res) {
    try {
        let response = await mobilesObj.getMobileWithName(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/updatemobilediscount', async function (req, res) {
    try {
        let response = await mobilesObj.updateMobileDiscount(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;