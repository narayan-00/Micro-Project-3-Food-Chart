const data = require('./food.json');

//list all the food items with category fruit

const foodItems=function(data){
    return data;
}
console.log(foodItems(data));



function category(foodList,typeOfFood){
    
    return foodList.filter((item)=>item.category.toLowerCase()===typeOfFood.toLowerCase());
}

//list all the food items with category vegetables
console.log("food items with category vegetables");
console.log(category(data,"Vegetable"));

//list all the food items with category fruit
console.log("food items with category fruit");
console.log(category(data,"Fruit"));

//list all the food items with category protien
console.log("food items with category protien");
console.log(category(data,"protein"));


//list all the food items with category nuts
console.log("food items with category nuts");
console.log(category(data,"nuts"));

//list all the food items with category grains
console.log("food items with category grains");
console.log(category(data,"grain"));

//list all the food items with category dairy
console.log("food items with category dairy");
console.log(category(data,"dairy"));


//list all the food items with calorie above 100
console.log("food items with calorie above 100");

function calorieAbove(foodList){
    return foodList.filter((item)=>item.calorie>100);
}

console.log(calorieAbove(data));

//list all the food items with calorie below 100
console.log("food items with calorie below 100");

function calorieBelow(foodList){
    return foodList.filter((item)=>item.calorie<100);
}

console.log(calorieBelow(data));


//list all the food items with highest protien content to lowest
console.log("food items with highest protien content to lowest");
function proteinSort(foodList){
    return foodList.sort((a,b)=> b.protiens-a.protiens);
}
console.log(proteinSort(data));


// list all the food items with lowest cab content to highest.
console.log("food items with lowest cab content to highest");

function cabSort(foodList){
    return foodList.sort((a,b)=> a.cab-b.cab);
}
console.log(cabSort(data));
