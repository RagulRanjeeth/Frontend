'use strict';

//functions - hoisted functions

Dance();
function Dance(){
    console.log("My doggie is dancing");
}


//functions with parameters and arguments
function showDetail(name, id){
    console.log(`Welcome ${name}, you're employee id is ${id}`);
}

showDetail("Ragul",55);

//function with default parameters
function Value(color = "Gold"){
    console.log('I love '+ color + ' color');
}
Value("Blue");
Value();

//function with return type
function add(num1, num2){
    return num1+num2;
}

let sum;
sum= add(99,99);
console.log("The sum is", sum);

//function expression
const Fav = function(){
    console.log("My fav game is cricket");
}
Fav();



const optFav = function(favSports){
    console.log("My favourite sports is "+favSports);

}
optFav("Tennis");

const total = function(num1, num2, num3){
    return num1+num2+num3;
}
let finTotal = total(53,59,58);
console.log(finTotal);


//Arrow functions
const goodMorning = ()=>{
    console.log("Good Morning");
}
goodMorning();

const greetings = (name)=>{
    console.log("Greetings "+ name);
}
greetings("Ragul");

const greeting = (name)=>{
    const greet = "Greet " + name;
    return greet;
}
console.log(greeting("Ram"));





