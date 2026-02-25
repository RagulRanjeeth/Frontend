console.log("Hello World Success");

let superHeroName = "Ragul Ranjeeth R"

//print with the name in the console
console.log("I love me " + superHeroName);


//Data types

//Numbers
let age = 120;
console.log("I live upto",age);
console.log("I live upto"+age);
console.log(typeof age);

let price = 120.66;
console.log("The products price is", price);
console.log(typeof price);

//String
let greeting = "Welcome to the lineage";
console.log(greeting);
let message = 'I am successful in this World'; 
console.log(message);

// This is ?? operator
let name;
console.log(`Hey this is an exam ${name ?? "Superhero" }` );

//Boolean
let RagulisActive = true;
console.log(RagulisActive);

let African = false;
console.log(African)

//Null 
let box = null;
console.log(box);

//Symbol
let uniq = Symbol('key');
console.log(uniq);

//undefined
let myChild;
console.log(myChild);

//BigInt
let bigNum = 98989898898989898989898989898989999999999n;
console.log(bigNum);

//Non-Primitives
//1.Objects
let Person = {
    fullname : "Ragul Ranjeeth R",
    age : 29,
    isEmployed : true
}

console.log(Person);
console.log(Person.age);

let Employee = {};
console.log(Employee);

//Arrays
let regNo = [1,2,3,4,5,9];
console.log(regNo);

//Functions
function inviteSuccess()
{
    console.log("I am successful in this life");
}
inviteSuccess();


//Dates
let dateTime = new Date();
console.log(dateTime);

//Operators

//Arithmetic Operators
console.log("Arithmetic Operators")

let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let diff = num2 - num1;
let prot = num1 * num2;
let Quot= num2 / num1;
let Remainder = num1 % num2;
let Exponential = num1 ** 2;


console.log("Addition of "+num1 +" and " + num2 +" is " + sum);
console.log("Difference of "+num2 +" and " + num1 +" is " + diff);
console.log("Product of "+num1 +" and " + num2 +" is " + prot);
console.log("Quotient of "+num2 +" and " + num1 +" is " + Quot);
console.log("Remainder of "+num1 +" and " + num1 +" is " + Remainder);
console.log("Exponential of "+ num1 + " is " +Exponential);


console.log(++num1);
console.log(num2--);


console.log("Assignment Operators")

let num = 10;
num += 5; //num = num + 5
console.log(num);

num -= 5; //num = num - 5
console.log(num);

num *= 5; //num = num * 5
console.log(num);

num /= 5; //num = num / 5
console.log(num);

num %= 4; //num = num % 4
console.log(num)

num **= 2; //num = num ** 2
console.log(num)

//Comparision Operators


// Equal to 
console.log(5 == 5);

console.log(5 == '5');

// Not Equal to
console.log(1 != 5);

console.log(1 != '1');

// Strict Equal to

console.log(5 === 5);

console.log(5 === '5');


//Not Strict Equal to

console.log(5 !== 1);

console.log(5 !== '5');

// Greater than >
console.log(5>3)

console.log(5>9)

console.log(-4>3)


// Greater than or equal to >=
console.log(5>=3)

console.log(5>=5)

//Less than <
console.log(5<3)

console.log(3<5)

//Lesser than or equal to <=
console.log(5<=3)

console.log(5<=5)

console.log(7 <= 10)


//Logical Operators


let isEmployed = true;

let isEu = true;

//And
console.log("This is AND operator")
console.log(isEmployed && isEu);


//OR
console.log("This is OR operator")
console.log(isEmployed || isEu);

//Not
console.log("This is NOT operator")
console.log(!!isEmployed);

