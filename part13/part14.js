//Async
const Promise= require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Salaha")
        },3000)  
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("1234567891")
        },2000)  
    })
}

// //Synchronous
// Promise.all([getName(),getMobile()]).then((result)=>{
//     console.log(result)
// })


//Async
async function getUser(){
    let name= await getName()
    console.log(name)
    let mob= await getMobile()
    console.log(mob)
}
getUser()