//состояние (Promise) может находиться в одном из трех состояний:
//"pending" (ожидание), "fulfilled" (выполнено) или "rejected" (отклонено).
//С помощью методов then(), catch() и finally() мы можем реагировать на изменение
//состояния промиса и использовать результат его выполнения.
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};
console.log(getData()); //return Promise
//функция fetch() так же возвращает Promise

//цепочка промисов
const promise1 = new Promise((resolve, reject) => {
  resolve("Promise1 выполнен");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("Promise2 выполнен");
});
const promise3 = new Promise((resolve, reject) => {
  reject("Promise3 отклонен");
});
promise1
  .then((data) => {
    console.log(data); // Promise1 выполнен
    return promise2;
  })
  .then((data) => {
    console.log(data); // Promise2 выполнен
    return promise3;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error); // Promise3 отклонен
  });

//ASYNC АСИНХРОННАЯ ФУНКЦИЯ
//await – это ключевое слово, которое используется в асинхронных функциях для того,
//чтобы указать, что здесь необходимо дождаться завершения промиса.

//После вызова функция async возвращает Promise.
// асинхронная функция delay
async function delay() {
  // ...
}

// асинхронная функция как часть выражения
const wait = async function () {
  // ...
};

// стрелочная запись асинхронной функции sleep
const sleep = async () => {
  // ...
};

//ПРИВЕР1
const hello = async() => {
  return 'Hello!';
}

const result = hello();

console.log(result);
//Т.е. результат будет одинаковым, если вместо 'Hello!' вернуть Promise.resolve('Hello!'):


//Например, выполним последовательно (один после завершения другого) три промиса внутри асинхронной функции:
// функция, возвращающая промис
function delay(ms, str) {
  return new Promise (resolve => setTimeout(() => {
    resolve(str);
  }, ms));
}
// асинхронная функция
async function message() {
  // ждём выполнение первого промиса delay(1000, 'Игорь') и сохраняем его результат в переменную a
  let a = await delay(1000, 'Игорь');
  // после завершения первого промиса, переходим к выполнению второго delay(2000, 'Егор')
  let b = await delay(2000, 'Егор'); // как только он завершится помещаем его результат в переменную b
  // после завершения второго промиса, переходим к выполнению третьего delay(4000, 'Денис')
  let c = await delay(4000, 'Денис'); // как только он выполнится сохраняем его результат в переменную c

  // выводим значения переменных в консоль
  console.log(`${a} ${b} ${c}`); // "Игорь Егор Денис"
}

// вызываем асинхронную функцию
message();


//Обработать потенциальные ошибки в асинхронной функции можно с помощью try..catch.
async function getUser1() {
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch(e) {
    // если что-то пойдёт не так на каком-то этапе в блоке try, то мы автоматически попадём в метод catch()
    console.error(e);
  }
}

// асинхронная функция для получения данных пользователя в формате JSON
const getUser = async(id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
      throw new Error('Ответ сервера не в диапазоне 200-299');
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error('Ошибка при получении данных пользователя');
  }
}
// функция для отображения данных пользователя на странице
const renderUsers = (users) => { users }
// асинхронная функция, в которой сначала вызывается getUser(), а затем renderUsers() для отображения полученных на странице
const clickUser = async(id) => {
  try {
    const data = await getUser(id);
    const users = Array.isArray(data) ? data : [data];
    renderUsers(users);
  } catch (e) {
    console.error(e);
  }
}