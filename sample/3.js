// var r= require('readline-sync')
// num= r.question("Enter a number:")
// for(i=0;i<num;i++){
//     if(i%2==0){
//         console.log("Even number")
//     }else{
//         console.log("Odd number")
//     }
// }


// //print evens
// var r= require('readline-sync')
// num= r.question("Enter a number:")
// for(i=0;i<=num;i=i+2){
//     console.log(i)
// }

// function

// //type-1
// function hello(){
//     console.log("Hello")
// }
// hello()

// //type-2
// function hello(name){
//     console.log(name)
// }
// hello("Salaha")


// //type-3
// function hello(){
//     console.log("Kadeejath")
//     return "Salaha"
// }
// console.log(hello())

// //type-3
// function hello(){
//     console.log("Kadeejath")
//     return "Salaha"
// }
// value= hello()
// console.log(value)


// // Array
// var s= ["Salaha", "Kadeejath", "Pathu"]
// console.log(s[0])
// for(i=0; i<4; i++){
//     console.log(s[i])
// }


// //nested function
// num= 10
// function hello(){
//     num= 20
//     function hey(){
//         num=30
//     }
//     hey()
// }
// hello()
// console.log(num)


// //nested function type-2
num= 10
function hello(){
    var num= 20
    function hey(){
        num=30
    }
    hey()
}
hello()
console.log(num)