var express = require('express');
var router = express.Router();
const mobiles = require('./mobilesRoutes');
const laptops = require('./laptopsRoutes');
const books = require('./booksRoutes');
const clothes = require('./clothesRoutes');
const users = require('./userRoutes');
const orderDetails = require('./orderDetailsRoutes');
const cart = require('./cartRoutes');


/* GET home page. */
router.get('/', (req, res) => {
  throw new Error();
})

// Link other routes here.
router.get('/route1', function (req, res, next) {
  res.send("Hello Route1");
});

router.use('/mobiles', mobiles);
router.use('/laptops', laptops);
router.use('/books', books);
router.use('/clothes', clothes);
router.use('/users', users);
router.use('/orderdetails', orderDetails);
router.use('/cart', cart);

module.exports = router;
