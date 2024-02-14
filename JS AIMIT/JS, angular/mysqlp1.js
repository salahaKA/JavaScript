const { error } = require('console');
var mysql = require('mysql2')
var con = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "aimit1db"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("connected!");
});

// // creating database aimit db

// var sql= "CREATE database aimit1db";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("Database created");
// });

// //Creating table emp(empno,name,add)

// var sql= "CREATE TABLE Employee(empno int, empname varchar(20), empadd varchar(20))";
// con.query(sql, function(err,result){
//     if(err) throw err;
//     console.log("Table Created");
// })


// var sql= "INSERT into employee values(115, 'KP','Mangalore')";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("1 Record Inserted");
// })

var sql= "SELECT * FROM aimit1db.employee"; //display all the record b4 delete
con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
});

// var sql= "DELETE FROM aimit1db.employee where empno=115";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("Record deleted");
// });

// var sql= "SELECT * FROM aimit1db.employee"; //display reminind rcrd
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log(result);
// });


// var sql = "UPDATE Employee SET empname = 'Sukoor', empadd = 'Bangalore' WHERE empno = 113";

// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Record updated Successfully");
// });




var sql= "INSERT into employee values(115, 'Aparna','Ksd')";
con.query(sql,function(err,result){
    if(err) throw err;
    console.log("Record Inserted successfully");
})

var sql= "SELECT * FROM aimit1db.employee"; //display all the record b4 delete
con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
});

