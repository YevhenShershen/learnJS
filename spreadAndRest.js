//SPREAD
//работа с масивами
const cities = ["Gdansk", "Warszawa", "Poznan"];
const cities2 = ["Gdansk2", "Warszawa2", "Poznan2"];
//с помощью spread оператора мы клонируем наш массив cities
//newCities теперь имеет свою ссылку на данные
const newCities = [...cities];
//при развертывании массивом между ними можем вставить дополнительные данные
const newCities2 = [...cities, "My City", ...cities2];

//работа с объектами
const population1 = {
  Gdansk: 2,
  Warszawa: 22,
  Poznan: 12,
};
const population2 = {
  Gdansk2: 2,
  Warszawa2: 22,
  Poznan2: 12,
};
//если разварачиваем объект то обязательно надо что бы мы его разварачивали в волнистых скомбах
//иначе выдаст ошибку из за того что некуда будет складывать ключи
//создаем новый объект population3 и клонируем другие объекты в него
const population3 = { ...population1, ...population2 };
console.log(population3);

const numbers = [1, 2, 3, 4, 44, 33];
console.log(Math.max(...numbers));

//REST
const sum = (a, b, ...rest) => {
  console.log(`Sum result: ${a + b + rest.reduce((a, i) => a + i, 0)} `);
};
sum(...numbers);

//вытягивает данные со свойство age в age2 и остаток объекта передает в переменную person2
let { age: age2, ...person2 } = person;
console.log(age2, person2);