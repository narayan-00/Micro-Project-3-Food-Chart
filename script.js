// const data = require('./food.json');
import data from "./food.json" assert { type: "json" };

//list all the food items

const foodItems = function (data) {
  return data;
};



function category(foodList, typeOfFood) {
  return foodList.filter(
    (item) => item.category.toLowerCase() === typeOfFood.toLowerCase()
  );
}




//list all the food items with calorie above 100


function calorieAbove(foodList) {
  return foodList.filter((item) => item.calorie > 100);
}



//list all the food items with calorie below 100


function calorieBelow(foodList) {
  return foodList.filter((item) => item.calorie < 100);
}



//list all the food items with highest protien content to lowest

function proteinSort(foodList) {
  return foodList.sort((a, b) => b.protiens - a.protiens);
}


// list all the food items with lowest cab content to highest.


function cabSort(foodList) {
  return foodList.sort((a, b) => a.cab - b.cab);
}


//to create table on browser screen
function addTableRow(data) {
  var table = document.getElementById("tableData");


  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  data.sort((a, b) => a.id - b.id);
  data.forEach((dataItem) => {
    const row = document.createElement("tr");

    for (const key in dataItem) {
      if (dataItem.hasOwnProperty(key)) {
        const cell = document.createElement("td");
        cell.textContent = dataItem[key];
        row.appendChild(cell);
      }
    }

    tbody.appendChild(row);
  });
}
let b1 = document.getElementById("bt1");
let b2 = document.getElementById("bt2");
let b3 = document.getElementById("bt3");
let b4 = document.getElementById("bt4");
let b5 = document.getElementById("bt5");
let b6 = document.getElementById("bt6");
let b7 = document.getElementById("bt7");
let b8 = document.getElementById("bt8");
let b9 = document.getElementById("bt9");
let b10 = document.getElementById("bt10");
let b11 = document.getElementById("bt11");
b1.addEventListener("click", listitem);
function listitem() {
  addTableRow(data);
}

function catg_veg() {
  let d = category(data, "Vegetable");

  addTableRow(d);
}

b2.addEventListener("click", catg_veg);

function catg_fru() {
  let f = category(data, "Fruit");

  addTableRow(f);
}
b3.addEventListener("click", catg_fru);

function catg_pro() {
  let p = category(data, "Protein");

  addTableRow(p);
}
b4.addEventListener("click", catg_pro);

function catg_nut() {
  let n = category(data, "Nuts");

  addTableRow(n);
}
b5.addEventListener("click", catg_nut);

function catg_grain() {
  let d = category(data, "grain");

  addTableRow(d);
}
b6.addEventListener("click", catg_grain);

function catg_dairy() {
  let d = category(data, "dairy");

  addTableRow(d);
}
b7.addEventListener("click", catg_dairy);

function calorie_above() {
  let d = calorieAbove(data);
  addTableRow(d);
}
b8.addEventListener("click", calorie_above);

function calorie_below() {
  let d = calorieBelow(data);
  addTableRow(d);
}

b9.addEventListener("click", calorie_below);

function addSortTableRow(data) {
  var table = document.getElementById("tableData");

  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  data.forEach((dataItem) => {
    const row = document.createElement("tr");

    for (const key in dataItem) {
      if (dataItem.hasOwnProperty(key)) {
        const cell = document.createElement("td");
        cell.textContent = dataItem[key];
        row.appendChild(cell);
      }
    }

    tbody.appendChild(row);
  });
}

function protien_sort() {
  let d = proteinSort(data);
  addSortTableRow(d);
}
b10.addEventListener("click", protien_sort);

function cab_sort() {
  let d = cabSort(data);
  addSortTableRow(d);
}
b11.addEventListener("click", cab_sort);
