// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {

//   const values= ['Ayshath', 'Kadeejath', 'Fathimath', 'Asiyath']

//   const person= {name:"Salaha", comments:{Comment:"sample code", date:"10/10/2023"}}


//   res.render('index', { title: 'codestudy4', name: 'Kadeejath Salaha', values, person});
// });

// module.exports = router;

//-----------------------------------------------------------------
//IF ELSE in hbs

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  const person= {name: 'Salaha', admin: true}
  const Fresher= {name:"Kadeeja", comments:{Comment:"sample code", date:"10/10/2023"}}
  res.render('index', {person, Fresher})
});

module.exports = router;
