//CALL BACK
// var dt= new Date()
// console.log('Hello')
// for(i=0;i<100;i++){
//     console.log('loop')
// }
// console.log('End Work')
// var ld=new Date()
// diff= dt-ld
// console.log("Execution time:"+diff+ "ms")
//-----------------------------------------------

// //synchronous (single thread)
// function longTask(milliSecond){
//     dt= new Date()
//     while((new Date()-dt) <=milliSecond){

//     }
// }

// console.log('started1')
// longTask(4000)
// console.log('end1')

// console.log('started2')
// longTask(2000)
// console.log('end2')

// console.log('started3')
// longTask(1000)
// console.log('end3')
// //------------------------------------------------
// //Asynchronous (Multy  thread)
// function longTask(milliSecond){
//     dt= new Date()
//     while((new Date()-dt) <=milliSecond){

//     }
// }
// function showEnd(){
//     console.log('End')
// }
// console.log('started1')
// setTimeout(showEnd, 2000)


// console.log('started2')
// setTimeout(showEnd, 2000)

// console.log('started3')
// setTimeout(showEnd, 2000)
// //----------------------------------------------------
// //CALL BACK
// var hello= (data) =>{
//     console.log('Daat:'+ data)
// }

// var hey= function(callback){
//     console.log('Hey working')
//     callback('codestudy_4')
// }
// hey(hello)
// //-------------------------------------------------------
// //MODELE

// var h= require('./hello') //importing hello.js to part5.js
// h.hello()
// h.hey()
// console.log("Num="+ h.num)
// //---------------------------------------------------------

// Usin built in module or local modele to our code

var convert= require('to-case')
var c1= convert.camel("What_the_heck")
var c2= convert.capital("What_the_heck")
var c3= convert.constant("What_the_heck")
var c4= convert.dot("What_the_heck")
var c5= convert.inverse("What_the_heck")
var c6= convert.lower("What_the_heck")
var c7= convert.pascal("What_the_heck")
var c8= convert.sentence("What_the_heck")
var c9= convert.slug("What_the_heck")
var c10= convert.space("What_the_heck")
var c11= convert.title("What_the_heck")
var c12= convert.upper("What_the_heck")

console.log("camel:"+ c1)
console.log("capital:"+ c2)
console.log("constant:"+ c3)
console.log("Dot:"+ c4)
console.log("Inverse:"+ c5)
console.log("Lower:"+ c6)
console.log("Pscal:"+ c7)
console.log("Sentence:"+ c8)
console.log("slug:"+ c9)
console.log("space:"+ c10)
console.log("title:"+ c11)
console.log("upper:"+ c12)

console.log(convert('whatTheHeck')) //camel
//so on
//--------------------------------------------------------