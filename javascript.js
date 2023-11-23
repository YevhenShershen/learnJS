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

//-----------------задача на акции https://www.youtube.com/watch?v=MznMhfjkoQ4&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo
// let prices1 = [2,0,7,8, 1, 5, 3, 6, 4]
// let prices2 = [7, 6, 5, 4, 3, 1]
// let maxProfit = function (prices) {
// let result = 0;
// for( let i = 0; i < prices.length; i++){
// if(prices[i] > prices[i+1]){
//   result += prices[i] - prices[i+1]
// }
// }
// return result
// };
// console.log(maxProfit(prices1))
// console.log(maxProfit(prices2))

//----------------- задача "контейнер с водой" https://www.youtube.com/watch?v=GoQFtH5MXLE&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo&index=3

// const input1 = [1,8,6,2,5,4,8,3,7];
// const input2 = [1,1];
// const input3 = [4,3,2,1,4];
// const input4 = [1,2,1];
// function maxArea(height){
//     let maxArea = 0;
//     let left = 0;
//     let right = height.length-1;
// while (left < right){
//   let currentVolume = Math.min(height[left], height[right]) * (right - left);
//   maxArea = Math.max(maxArea, currentVolume);

//   if(height[left] < height[right]){
//     left +=1;
//   }else{
//     right-=1;
//   }
// }
// return maxArea
// }
// console.log(maxArea(input1))
// console.log(maxArea(input2))
// console.log(maxArea(input3))
// console.log(maxArea(input4))
let Obj = {
  name: 123,
  asd: 12322,
};
console.log(Obj[1]);

let a = [1, 2, 55, 66, 222, 22, 3];
var max = a.reduce(function (x, y) {
  return x > y ? x : y;
});
console.log(max);

