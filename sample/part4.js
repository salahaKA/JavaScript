// //LET
// var num= 10
// var num= 20
// console.log(num)

// // let x= 5
// // let x= 9 // error bcz not possible 
// // console.log(x)
//console.log("---------------------------------------------")
// function hello(){
//     var i= 0
//     let x=100
//     if(i===0){
//         var hey= 20
//         let x= 30
        
//     }
//     console.log(hey)
//     console.log(x)
// }

// hello()
//console.log("---------------------------------------------")
// //CONST
// const hello= 100

// //hello= 200 //error

// const arr= ['Anu', 'Manu']

// arr.push('Raju') //possible
// console.log(hello)
// console.log(arr)

// arr=['fcvaca', 'hshsj'] //error
// console.log(arr)
//console.log("---------------------------------------------")
//DEFAULT ARGUMENT
// function sum(num1,num2)
// {
//     console.log(num1+num2)
// }
// sum(10,20)
// console.log("-----------------")
// function sum(num1=100 ,num2)
// {
//     console.log(num1+num2)
// }
// sum(undefined, 20)
//console.log("---------------------------------------------")
// //CLASS IN JS
// class Sample
// {
//     constructor(num1,num2) //constructor
//     {
//         this.num1= num1
//         this.num2= num2
//     }
//     hello()                //method or member function
//     {
//         console.log("Hello Guys!") 
//         var sum= this.num1+this.num2
//         console.log("Sum is:"+ sum)
//     } 
// }
// var hey= new Sample(19, 40)
// hey.hello()

//console.log("---------------------------------------------")
//INHERITANCE
// class mainSample
// {
//     sampleHello(){
//         console.log("This is sample hello function")
//     }
// }

// class Sample extends mainSample 
// {
//     constructor(num1,num2) //constructor
//     {
//         super()
//         this.num1= num1
//         this.num2= num2
//     }
//     hello()                //method or member function
//     {
//         console.log("Hello Guys!") 
//         var sum= this.num1+this.num2
//         console.log("Sum is:"+ sum)
//     } 
// }
// var hey= new Sample(19, 40)
// hey.hello()
// hey.sampleHello()
//console.log("---------------------------------------------")
//ARROW FUNCTION-In js function also called as arrow function

//normal
function add(a,b)
{
    return a+b
}
console.log(add(212,432))
console.log("--------------")
//arrow function
let sum=(a,b) => a+b
console.log(sum(346,899))
console.log("--------------")
//arrow function with multiple code
let sum1=(a,b) => { return a+b}
console.log(sum1(219,332))
console.log("---------------------------------------------")