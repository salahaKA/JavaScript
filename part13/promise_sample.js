// function add(num1, num2, callback){
//     let err= false
//     if(num1=== 0){
//         err= true
//     }
//     callback(num1+num2)
// }

// function mul(num1, num2, callback){
//     callback(num1*num2)
// }

// function div(num1, num2, callback){
//     callback(num1/num2)
// }

// add(10, 20,(sum,err)=>{
//     if(err){
//         console.log("First number is zero")
//     }else{
//         console.log(sum)
//         mul(sum, sum, (product)=>{
//             console.log(product)
//             div(product,10, (divisible)=>{
//                 console.log(divisible)
//             })
//         })      
//     }
// })

// using promise

const Promise= require('promise')

function add(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num1===0){
            reject("First number is zero")
        }
        resolve(num1+num2)
    })
}

function multiply(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num1===0){
            reject("First number is zero")
        }
        resolve(num1*num2)
    })
}

function div(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num1===0){
            reject("First number is zero")
        }
        resolve(num1/num2)
    })
}

function sub(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num1===0){
            reject("First number is zero")
        }
        resolve(num1-num2)
    })
}

add(10, 20).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product)
    return div(product, 10)
}).then((division)=> {
    console.log(division)
    return sub(division, 10)
}).then((subtraction)=>{
    console.log(subtraction)
}).catch((err)=>{
    console.log(err)
})



