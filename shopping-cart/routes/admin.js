var express = require('express');
var router = express.Router();
var productHelper= require('../helpers/product-helpers');
const { render } = require('../app');

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products=[
    {
      //id: 1,
      name:"CLOTHES",
      category: "Western",
      description: "Western model clothes for Ladies",
      image:"https://i.pinimg.com/736x/6e/f7/c1/6ef7c14b890b11b4247aacfa52614fda--clothing-displays-department-store.jpg"

    },
    {
      //id: 2,
      name:"SKINCARE",
      category: "Natural",
      description: "Organic skin care products",
      image:"https://www.aranca.com/assets/uploads/blogs/organicskincareban.jpg"

    },
    {
      //id: 3,
      name:"HIJAB",
      category: "Arabic",
      description: "Pretty official Hijab shawls",
      image:"https://i.pinimg.com/originals/75/1b/d1/751bd18e747f37a7cc796a05f826b59a.jpg"
    },
    {
      //id: 4,
      name:"BAGS",
      category: "Fancy Bags",
      description: "Branded pretty bags",
      image:"https://i.pinimg.com/originals/d6/91/93/d69193495e1ea753211be064dfcb1d58.png"

    },
  ]

  res.render('admin/view-products', {admin: true, products})
});

router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
  console.log(req.body)
  console.log(req.files.image)

  productHelper.addProduct(req.body, (result)=>{
    res.render('admin/add-product')
  })
})

module.exports = router;
