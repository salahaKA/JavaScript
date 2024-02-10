var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"CLOTHES",
      category: "Western",
      description: "Eigo shopping branded Western model clothes for Ladies",
      image:"https://i.pinimg.com/736x/6e/f7/c1/6ef7c14b890b11b4247aacfa52614fda--clothing-displays-department-store.jpg"

    },
    {
      name:"SKINCARE",
      category: "Natural",
      description: "Organic skin care products",
      image:"https://www.aranca.com/assets/uploads/blogs/organicskincareban.jpg"

    },
    {
      name:"HIJAB",
      category: "Arabic",
      description: "Pretty official hijab shawls",
      image:"https://i.pinimg.com/originals/75/1b/d1/751bd18e747f37a7cc796a05f826b59a.jpg"
    },
    {
      name:"BAGS",
      category: "Fancy Bags",
      description: "Ladies branded pretty bags",
      image:"https://i.pinimg.com/originals/d6/91/93/d69193495e1ea753211be064dfcb1d58.png"

    },
  ]
  res.render('index', { products , admin:false});
});

module.exports = router;
