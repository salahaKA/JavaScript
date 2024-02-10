// //creating node js server

// //type-1
// var http= require('http')
// http.createServer(server).listen(7000)

// function server(req,res){
//     res.write('codestudy4'+"\n")
//     res.write('Welcom to codestudy4')
//     res.end()
// }

// //--------------------------------------------
// //type-2
// var http= require('http')
// http.createServer(function(req,res){
//     res.write('codestudy4'+"\n")
//     res.write('Welcom to codestudy4')
//     res.end()
// }).listen(7000)
// //------------------------------------------------

// //Adding html file to js
var http= require('http')
var fs= require('fs')  // to connect html file (fs-file system module)

http.createServer(function(req,res){
    fs.readFile('part6.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    
}).listen(7000, ()=> console.log("Server running..."))
// //-----------------------------------------------------------

