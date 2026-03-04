"use strict";

const employeePerson = {
    name : "Macrun",
    age : 99,
    isEmployee : true,
    showDetails : function(){
        console.log("Hi this is "+this.name+"and I am " + this.age);
    }
};

employeePerson.showDetails();


class PersonDetails{
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }

    greet(){
     console.log("Hi this is "+this.name+"and I am " + this.age);
    }
}
    

const allu = new PersonDetails("Allu", 99);
// allu.greet();

allu.name="Rahu";
allu.greet();


class Animal{
  speak() {
        console.log("Animal makes sound");
    }
}

class Human extends Animal{
     PersonSpeaks() {
        console.log("Human makes speeches");
    }

}

const human = new Human();
human.PersonSpeaks();

class Bank{
 #amount;
 
 constructor(amount){
    this.#amount = amount;
 }

 getAmount(){
    return this.#amount;
 }

 setAmount(newAmount){
    if(newAmount > 0){
        this.#amount = newAmount;
    }

 }

 


}

const bankCon = new Bank(4000);
console.log(bankCon.getAmount());
bankCon.setAmount(9000);

console.log(bankCon.getAmount());



//callback
function show(){
    return "Engine is start";
}

console.log(show());


//Higher order
function driver(name, engineStart){
    const message = engineStart(); 
     console.log(message + " by "+name);
}
driver("Alex", show);


let count = 10;

function increment() {
    return count++;
}

console.log(increment());
console.log(increment());

let a = 9;
let b = 2;





function add(a , b){
    return a+b;
}


console.log("Addition value: " +add(a, b));

console.log("Addition value: " +add(a, b));


const numerator = 9;
const num = 0;
try {
    const fin = numerator / num;
}
catch(e){
    console.log(e);

}
finally{
        console.log("The final statement is execute");
}

//Spread opeartor
let arr = [10, 20 , 30];
let arrCombine = [55, 50, 60];
let combine = [...arrCombine, ...arr];
console.log(combine);

