//рекурсивная функция
function rec(x) {
  if (x <= 1) return 1;
  console.log(x);
  return x * rec(x - 1);
}
rec(10);

// Выражения определения функций иногда могут тут же вызываться:
const tensquared = (function (x) {
  return x * x;
})(10);
//функция без return возвращает undefind
function test() {}
console.log("Undefind function: " + test());
//вложенные функции
function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}
//Вызов функций четырьмя способами: 1)как функции, как методы, 2)как конструкторы
//и 3) косвенно, с помощью их методов call() и apply().

var calculator = {
  // Литерал  объекта
  operand1: 1,
  operand2: 1,
  add: function () {
    // Обратите внимание, что для ссылки на этот объект используется
    // ключевое слово this.
    // this.result - бовляем в нашем объекте еще одно свойство result
    this.result = this.operand1 + this.operand2;
  },
};
calculator.add(); // Вызвать метод, чтобы вычислить 1+1.
calculator.result; // => 2

//////////////////
customer.surname.toUpperCase();
// Вызвать метод объекта customer.surname
f().m();
// Вызвать метод m() возвращаемого значения функции f()

////////
function sum(...theArgs) {}
//Синтаксис остаточных параметров функции позволяет представлять
//неограниченное множество аргументов в виде массива.spread operator

//ФУНКЦИИ КАК ПРОСТРАНСТВО ИМЕН
//мы используем тело функции и создаем там переменные и используем их
//внутри что бы не засорять глобальное пространство
function function1() {
  let i = "";
  console.log(i);
}
//ЗАМЫКАНИЯ
//Замыкание — это комбинация функции и лексического окружения,
//в котором эта функция была определена. Другими словами, замыкание
// даёт вам доступ к Scope (en-US) внешней функции из внутренней функции.
var scope = "global scope"; // Глобальная переменная;
function checkscope() {
  var scope = "local scope"; // Локальная   переменная;
  function f() {
    return scope;
  } // Вернет значение локальной переменной scope;
  return f();
}
checkscope(); //; // => "local scope"
var uniqueInteger = (function () {
  var counter = 0;

  return function () {
    return counter++;
  };
})();
//вернет строку
JSON.stringify()
//вернет простой объект
JSON.parse()

// ''!! очень удобно проверять на содержание. Переводит в false или true
console.log(!!'text')

//ARROW FUNCTION
// Стрелочная функция
const arrowFunction =()=> console.log('Hi, I`m arrow function')


//CALLBACK FUNCTION
//Колбэк-функция (или обратный вызов) - это функция, переданная в другую функцию в качестве аргумента,
//которая затем вызывается по завершению какого-либо действия.
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

//FUNCTION DECLARATION
// в JavaScript - это способ создания функции, который позволяет определить функцию в коде JavaScript до её вызова.
// Основное преимущество объявления функции заключается в том, что функцию можно вызывать до того, как она будет фактически определена в коде,
// так как объявление функции "поднимается" (hoisted) в начало текущей области видимости.
function myFunction() {
  // Тело функции
  console.log("Привет, это моя функция!");
}

// Вызов функции
myFunction();

//FUNCTION EXPRATIONS
//Функциональное выражение (function expression) в JavaScript - это еще один способ определения и использования функций.
//В отличие от объявлений функций (function declarations), функциональные выражения не поднимаются (hoisted), что означает,
// что их нельзя вызывать до их определения в коде. Функциональные выражения могут быть присвоены переменным,
//переданы в качестве аргументов в другие функции или даже созданы безымянно.
var multiply  = function(x, y) {
  return x * y;
};