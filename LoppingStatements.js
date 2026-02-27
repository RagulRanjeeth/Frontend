'use strict';

//for
for(let i =0; i <= 5; i++)
{
    console.log("You are save");
}

for(let x = 0; x <= 1; x++){
    console.log("This is the outter lopping statement");

    for(let y =0 ; y <2; y++){
            console.log("This is the inner lopping statement");
    }
}


//while loop
let balance = 10;

while (balance >= 10 && balance <= 60){
    balance += 10;
    console.log("Balance is : " + balance);
}
console.log("The available balance is:"+ balance);


//do while
let num =0;
do{
    console.log("This is print at "+ num);
}while(num >0);
