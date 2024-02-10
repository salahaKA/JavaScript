var read= require('readline-sync')

num1= read.question("Enter first number:")
num2= read.question("Enter second number:")

if(num1>num2){
    console.log(num1+ " is largest")
}else{
    console,log(num2+ " is largest")
}


