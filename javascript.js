// const { func } = require("assert-plus");
// const { functionExpression } = require("../work/node_modules/@babel/types/lib");

// // work with Object перебор свойст и ключей в объекте
// let dataBase2 = {
//   name: "Vasia",
//   secondName: "Vasiliewicz",
//   age: 25,
//   Family: { parents: "Father and mother" },
//   makeTest: function() {
//     console.log("Test123");
//   },
// };
// dataBase2.makeTest()

// //obj[item] = Vasia; obj.item = name
// console.log(dataBase2["name"]);
// console.log(dataBase2["Family"]["parents"]);
// console.log(`${dataBase2.name} object properties`);

// function testFunction(obj) {
//   for (let item in obj)
//     if (typeof obj[item] === "object") {
//       for (let i in obj[item]) {
//         console.log(obj[item][i]);
//       }
//     } else {
//       console.log(obj[item]);
//     }
// }

// console.log(Object.keys(dataBase2).length); //считает колличетсво элементов внутри объекта

// testFunction(dataBase2);

// //------------ARRAY---------
// let arr = [1, 2, 4, 22, 22, 333, 123]
// // //вывод индекса
// // for( let item in arr){
// //   console.log(item)
// // }
// // //вывод значений(работает с масивоподобными конструкциями, с объектами не работает)
// // for(let value of arr){
// //   console.log(value)
// // }


// //==============================================================================================
// //Методы массива
// // arr.forEach(function(item, i, arr){
// // console.log(`id-${i}; value of item- ${item}; value of array ${arr}`)
// // })
// // Сортировка чисел в массиве
// arr.sort(SortNum);
// function SortNum(a, b){
//   a-b
// }
// console.log(arr)

// //https://learn.javascript.ru/descriptors-getters-setters    информация о гетерах и сетерах

// // Methods array
// let numbers= [ 1, 2, 3, 4, 5, 6];
// let testText = 12;
// function Test(){
//   numbers.slice(2)
//   console.log(numbers.slice(2))
// }
// Test()

//callback function
// function getName(callbackfunc){
//   let name1 = prompt("Write your name",)
//   callbackfunc(name1)
// }
// function callName(name){
//   console.log("hello" + name)
// }
// getName(callName)
// let arrName= ['wasia1', 'wasia2', 'wasia3', 'wasia4', 'wasia4', 'wasia4',]
// let arrName2 = new Set(arrName)
// console.log(arrName)
// console.log(arrName2)
// let numbers = [ 1, 2, 3];

// numbers.forEach(item => console.log(item))

// let user = {
//   name: "Roma",
//   age: 16,
//   country:"Russian"
// }
// console.log(Object.entries(user))

// let arr= ["as", 'as2', 'as3']
// let arr2 = ["as221", 'as244', 'as333']
// let arr3;
// arr3= arr.concat(arr, arr2, 123, 'dasfs')
// arr.forEach((item) => {
//   console.log(item);


// });
// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [ 1, 2, 15, 12, 122, 0 ];

// arr.sort(compareNumeric);

// console.log(arr);  // 1, 2, 15
let prices1 = [0,7,8, 1, 5, 3, 6, 4]
let prices2 = [7, 6, 5, 4, 3, 1]
let maxProfit = function (prices) {
let result = 0;
for( let i = 0; i < prices.length; i++){
if(prices[i] > prices[i-1]){
  result += prices[i] - prices[i-1]
}
}
return result
};
console.log(maxProfit(prices1))
// console.log(maxProfit(prices2))
