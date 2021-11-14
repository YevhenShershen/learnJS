// work with Object перебор свойст и ключей в объекте
let dataBase2 = {
  name: "Vasia",
  secondName: "Vasiliewicz",
  age: 25,
  Family: { parents: "Father and mother" },
  makeTest: function() {
    console.log("Test123");
  },
};
dataBase2.makeTest()

//obj[item] = Vasia; obj.item = name
console.log(dataBase2["name"]);
console.log(dataBase2["Family"]["parents"]);
console.log(`${dataBase2.name} object properties`);

function testFunction(obj) {
  for (let item in obj)
    if (typeof obj[item] === "object") {
      for (let i in obj[item]) {
        console.log(obj[item][i]);
      }
    } else {
      console.log(obj[item]);
    }
}

console.log(Object.keys(dataBase2).length); //считает колличетсво элементов внутри объекта

testFunction(dataBase2);

//------------
