var db= require('../config/connection')

module.exports={
    addProduct:(product, callback)=>{
        console.log(product)
        db.get().collection('product').insertOne(product).the((data)=>{
            callback(true)
        })
    }
}