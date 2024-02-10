//CREATING AND CONNECTING WITH ROOT

// var http= require('http')
// var fs= require('fs')  // to connect html file (fs-file system module)

// http.createServer(function(req,res){
//     if (req.url=== '/')     // '/' means localhost:7000 or current url
//     { 
//         fs.readFile('part6.html', function(err, data){
//             res.writeHead(200, {'Content-Type':'text/html'})
//             res.write(data)
//             res.end()
//         })
//     }else if(req.url=== '/login'){
//         res.write('login')
//         res.end()
//     }else{
//         res.writeHead(404, {'Content-Type':'text/html'})
//         res.write("Error")
//         res.end()
//     }
    
// }).listen(7000, function(){
//     console.log('Server running...')
// })

//........................................................

// connecting with part6.html and part7.html

var http= require('http')
var fs= require('fs') 
var url= require('url')

http.createServer(function(req,res){

    var querry= url.parse(req.url, true)  //pass as key:value object pair
    //console.log(querry.pathname)


    //if (req.url=== '/')     // '/' means localhost:7000 or current url
    if(querry.pathname=== '/')
    { 
        fs.readFile('part6.html', function(err, data){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(querry.pathname=== '/signup'){
        fs.readFile('part7.html', function(err, data){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
        
    }else if(querry.pathname=== '/signupaction') //link with html form action listener
    {
        console.log(querry.query) //display value on server
        //console.log("Last name:"+ querry.query.lname)

        //res.write('Button Clicked')

        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>'+"First name is:"+ querry.query.fname+ '</h1>')
        res.write('<h2>'+"Full Name:"+ querry.query.fname+ " "+ querry.query.lname+ '</h1>')
        res.end()

    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write("Error")
        res.end()
    }
    
}).listen(7000, function(){
    console.log('Server running...')
})