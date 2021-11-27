var express = require('express');
customer=require("./customer_app");
var router = express.Router();

/* GET users listing. */


router.get('/orders',customer.allOrders);
router.post('/orders-details',customer.orderDetails);
router.post('/cart-checkout',customer.checkoutCart);
router.post('/signup',customer.customerSignUp);











module.exports = router;
