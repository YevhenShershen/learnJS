//ДЕСТРУКТУРИЗАЦИЯ С МАССИВАМИ
const numberList = [111, 333, 444, 233];
console.log(`Array: ${numberList}`);
let [n1, n2] = numberList;
console.log(n1, n2);
//, , пропускаем второй элемент в массиве
let [n3, , n4, n5, n6] = numberList;
//n6 ст undefind потому что наша переменная не имеет что присвоить
console.log(n3, n4, n6);
//n7 n8 имеют свои значения и если нашей переменной нечего брать,
// то она оставлчяет то значени которое было
const numberList2 = [111];
let [n7 = "Text", n8 = "Text2"] = numberList2;
console.log(n7, n8);
//ДЕСТРУКТУРИЗАЦИЯ С ТЕКСТОМ
let [t1, t2] = "Text";
//t1=T, t2=e
//ДЕСТРУКТУРИЗАЦИЯ С ОБЪЕКТАМИ
let person = {
  name: "Alex",
  passport: true,
  age: 33,
};
let { age, ppp, name } = person;
//Если свойство ненайдено то он приймет значение undefind(ppp = undefind)
console.log(age, ppp, name);
//y x z это у нас переменные, а (age, name, passport это ключи которые мы хотим вытащить)и присвоить нашим переменным
let { age: x, name: y, passport: z } = person;
console.log(x, y, z);
//мы нашей переменной даем значение, и если в объекте не будет такого свойства которое хоти вытащить,
// то значение которое было приписано переменной останется
let { age: a = "Jackson", surname: b = "Jakubowski" } = person;
console.log(a, b);

