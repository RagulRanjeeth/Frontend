'use strict';
const Employees = {
    EmpName : "Ragul",
    EmpId : 1001,
    isEmployee : true
};

console.log(Employees);

//Adding a new property
Employees.state = "TamilNadu";
console.log(Employees);

//Adding a new properties
Employees.age = 29;
//Modifying an existing obj
Employees.age = 33;
console.log(Employees);

//Object with methods
let bikes ={
    branName : "Ducati",
    branModel : "290CC",
    displayInformation : function(){
        return `${this.branName}, ${this.branModel}`;
    }
};

console.log(bikes);

//Access the functions insidethe obj
console.log(bikes.displayInformation());

//Destructuring the objects
let Emp = {
    Name : "Rudra",
    Age : 55,
    Designation : "Senior Software Engineer"
}

console.log(Emp);   


let {Name , Age, Designation} = Emp;

console.log(Name);
console.log(Age);
console.log(Designation);


//Nested Obj
let Res = {
    ResName: "Cricket First",
    Location : "Jammu",

    owner:{
        ownerName : "Ragul",
        ownerAge : 51,
        Contact:{
            email: "Ragul@gmail.com",
            mobile : 9897898989
        }
    }
};

console.log(Res);

//Access the inner obj properties
console.log(Res.owner);
console.log(Res.owner.Contact);


let {ResName, Location} = Res;
console.log(ResName);
console.log(Location);


let {ownerName, ownerAge} = Res.owner;

console.log(ownerName);
console.log(ownerAge);

let {email, mobile} = Res.owner.Contact;
console.log(email);
console.log(mobile);











