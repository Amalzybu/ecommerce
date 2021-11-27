var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { placeholder: 'Express' });
});

router.get('/checkout', function(req, res, next) {
  res.render('check-out', { placeholder: 'Express' });
});





module.exports = router;
