const express= require('express')

const path= require('path')

const app= express()

app.use(function(req, res, next) //common for all root
{
    console.log('start')
    next()
})

app.get('/signup', function(req,res, next){
    //res.send('Hello')
    //res.sendFile('D:\Brototype\Web Development Challenge-2\sample\part7.html')
    res.sendFile(path.join(__dirname, 'part7.html'))
    console.log('middle')
    next()
})

app.use(function(req,res){
    console.log('End')
})
app.post('/signup', function(req, res){
    
    res.send('Account Created')
})

app.get('/about', (req, res)=> res.send('About'))


app.listen(3000, function(){
    console.log(__dirname)
    //console.log(__filename)
    console.log('Server started..')
})