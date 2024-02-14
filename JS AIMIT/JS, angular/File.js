var http= require('http')
var fs=require('fs')

http.createServer(function(req,res){
    // fs.readFile("sample.txt",function(err,data){
    //     if(err) throw err;
    //     res.writeHead(200,{'Content-Type':'text/htmml'})
    //     res.write(data);
    //     res.end();
    // })

    fs.appendFile("sample.txt","I love my India", function(err){
        if(err) throw err;
        console.log("saved!");
        
    })
    
}).listen(8081);