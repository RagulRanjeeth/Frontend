let vegetables = ["Carrot", "Cabbages", "Pumpkin"];

//find
let findVeg = vegetables.find((veg) => veg.length == 7);
console.log(findVeg);

//filters
let findVegetables = vegetables.filter((vegetables) => vegetables.length > 5);
console.log(findVegetables);

//maps
let mapping = vegetables.map((vegetables) =>{
    return "Your fav vegetable is "+ vegetables.length;
})

console.log(mapping);