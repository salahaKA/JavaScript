// // OBJECT SAMPLE

// var person= {name:"Salaha", age:21, place:"Kasaragod"}
// console.log("name is:"+ person.name)
// console.log("Age is:"+ person.age)
// console.log("Place is:"+ person.place)
// // or
// console.log("Place is:"+ person['place']) //same output

// console.log("----------------------------------")
// //dislay key
// console.log("Display Key name")
// for(i in person){
//     console.log(i)
// }

// console.log("----------------------------------")
// //dislay value
// console.log("Display Value")
// for(i in person){
//     console.log(person[i])
// }

// console.log("----------------------------------")
// //dislay (key:value)
// console.log("Display (Key:value) pairs")
// for(i in person){
//     console.log("("+ i+ ","+ person[i]+ ")")
// }

// console.log("----------------------------------")

// person.name= "Ameya"
// console.log("After modification:"+ person.name)

// console.log("------------------------------------------")

// var person= {name:"Salaha", age:21, place:"Kasaragod", display:function(){
//     console.log(this.name)
// }}

// person.dob= "21-07-2001"
// console.log(person)
// console.log("----------------------------------")
// person.displayAge= function(){
//     console.log(this.age)
// }
// console.log(person)
// console.log("------------------------------------------")

// //object CONSTRUCTOR
// function student(name, age, gender){
//     this.name= name
//     this.age= age
//     this.gender= gender
//     this.display= function(){
//         console.log("Name:"+ this.name+ "\t"+ "Age:"+ this.age+ "\t"+ "Gender:"+ this.gender)

//     }
// }
// var S1= new student("Sooya", 25, "F")
// S1.display()

// var S2= new student("HaeIn", 28, "M")
// S2.display()

// var S3= new student("IU   ", 29, "F")
// S3.display()
// console.log("------------------------------------------")

// //DATE
// var d= new Date("05 OCT 2023")
// console.log(d.getDate())
// console.log(d.getFullYear())
// console.log("------------------------------------------")

//EXCEPTION IN JS

//console.log("------------------------------------------")
