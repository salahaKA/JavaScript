var mysql= require('mysql2');
const { debugPort } = require('process');
var con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "dbprod"
})
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!")
})

// var sql= "CREATE database dbprod"
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("Database created successfully!")
// })

// var sql= "CREATE TABLE product(pid int primary key, pname varchar(20), unitprice int, stockavil int, expdate date)";
// con.query(sql,function(err){
//     if(err) throw err;
//     console.log("Table created")
// })

// var sql= "INSERT INTO product VALUES(1001,'prod1',100,6,'2025-01-01')";
// con.query(sql,function(err){
//     if(err) throw err;
//     console.log("1 record inserted")
// })

// var sql= "SELECT * FROM product";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log(result)
// })


// var sql= "INSERT INTO product VALUES?";
// var values= [[1002,'prod2',200,2,'2025-01-01'],
//     [1003,'prod3',150,5,'2026-02-27'],
//     [1004,'prod4',199,1,'2025-10-11'],
//     [1005,'prod5',670,8,'2026-03-21']];
// con.query(sql,[values],function(err,result){
//     if(err) throw err;
//     console.log("4 record inserted!")
// })

// var sql= "SELECT * FROM product";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log(result)
// })

// var sql= "DELETE FROM product WHERE pid=1003"
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("1 record deleted")
// })

var sql= "SELECT * FROM product";
con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result)
})

// var sql= "DELETE TABLE product";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("Table deleted")
// })