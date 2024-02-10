var express = require('express');
var router = express.Router();
const MongoClient= require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req, res){
  console.log(req.body)

  MongoClient.connect("mongodb://localhost:27017", function(err, client) {
  if(err) {
    console.log("Error")
  }else{
    client.db('codestudy4').collection('user').insertOne(req.body)
  }
  })

  res.send('Got it!')
})
module.exports = router;
