//callbacks
let first = (secondFunc) => {
     console.log("This is the first");

     secondFunc();
};

let second = () =>{
    console.log("This is the second");
};

first(second);

//Promises
let stocks = {
    fruits : ["apple", "strawberri", "lime"],
    liquid : ["water", "soda"]
};


let isShowOpen = true;

let order = (time, work) => {


    return new Promise((resolve, reject)=>{

        if(isShowOpen){

            setTimeout(() =>{
                 resolve(work());
            },time );
            
        }
        else{
            reject(console.log("Better luck next time"));
        }
})
}

order(2000, ()=>{
    console.log(`The select is ${stocks.fruits[0]} fruits`);
})

.then(()=>{

    return order(0, ()=>{
        console.log("The production is start now");
    })
})
.then(()=>{

    return order(2000, ()=>{
        console.log("The order is process");
    })
})

.then(()=>{

    return order(3000, ()=>{
        console.log("Oh my good, thank God");
    })
})

.catch(()=>{
    console.log("Yeah come back when we are there");
})

.finally(() =>{
    console.log("Thanks for visit");
})
// .then()


// .then()

//Async and Await

async function vegOrder(){
    const data = await order(()=>{
         console.log("Vegetable order is placed");
    });
    console.log(data);
}

vegOrder();

let vegeatbles = "Carrot";

let isVegetableShpOpen = true;

