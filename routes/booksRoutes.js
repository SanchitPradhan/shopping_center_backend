const router = require('express').Router();
const booksData = require('../controllers/booksController');

let booksObj = new booksData();

router.post('/insertbooks', async function (req, res) {
    try {
        let response = await booksObj.insertBooks(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get('/getallbooks', async function (req, res) {
    try {
        let response = await booksObj.getAllBooks()
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getbookswithgenre', async function (req, res) {
    try {
        let response = await booksObj.getBooksWithGenre(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/getbookswithname', async function (req, res) {
    try {
        let response = await booksObj.getBooksWithName(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.post('/updatebooksdiscount', async function (req, res) {
    try {
        let response = await booksObj.updateBooksDiscount(req)
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

module.exports = router;