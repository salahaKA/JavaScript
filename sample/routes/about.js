var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {

  
  res.render('about', {value: 'Welcome to ABOUT page'});
});

module.exports = router;
