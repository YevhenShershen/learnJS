//https://www.youtube.com/watch?v=Sr0WT-XHwd0
//Promise (в переводе 'обещание') это возможность дождаться выполнения ассинхронной операции и потом продорлжить что либо что было внутри ассинхронности
//Что же такое Асинхронность? - это выполнять разные задачи одновременно

// let a = 7;

// setTimeout(() => {
//   a = 99;
// }, 2000);
// console.log(`Вывод переменной А без промиса ${a}`);
//Из за ассинхронности у нас выводится "а" а потом срабатывает функция так как у нее таймаут 2 секунды

//У нас есть переменная которая принимает данные через запрос на сервере
//И нам надо его дождаться что бы наши функции низлежащие могли сработать после того
// как нам прийдут какие то данные
//что бы была линейная операция кода у нас мы используем Промисы

//resolve(value) — если работа завершилась успешно, с результатом value.
//reject(error) — если произошла ошибка, error – объект ошибки.
//(then запускается только тогда, когда мы получаем какие то данные)


//Обработка ошибок, "try..catch"
// Сначала выполняется код внутри блока try {...}.
// Если в нём нет ошибок, то блок catch(err) игнорируется: выполнение доходит до конца try и потом далее, полностью пропуская catch.
// Если же в нём возникает ошибка, то выполнение try прерывается, и поток управления переходит в начало catch(err).



//https://www.youtube.com/watch?v=0O-ZVnwbGW4

//Пример 1
let family = [
  { member: "mother", id: 111, coffee: "Latte" },
  { member: "father", id: 222, coffee: "Espresso" },
  { member: "son", id: 333, coffee: "Cappucino" },
];

const getCoffe = (member) => {
  const coffePromise = fetch("https://api.sampleapis.com/coffee/hot");
  return coffePromise
    .then((data) => data.json())
    .then((list) => {
      const coffee = list.find((list) => list.title === member.coffee);
      return {
        ...member,
        coffee: coffee,
      };
    });
};

const geFamilyMember = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = family.find((res) => res.id === id);
      if (member) {
        resolve(member);
      } else {
        reject(Error("Член семь не найден!"));
      }
    }, 1500);
  });
};
geFamilyMember(111)
  .then((data) => {
    return getCoffe(data);
  })
  .then((newMember) => {
    console.log("newMember", newMember);
  })
  .catch((err) => {
    console.log(err);
  });

//Пример 2
const makeCoffe = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ваш кофе готов!");
    }, 500);
  });
};

const makeToast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ваши тосты готовы");
    }, 2500);
  });
};

const coffePromise = makeCoffe();
const toastPromise = makeToast();

Promise.all([coffePromise, toastPromise]).then(
  ([coffePromise, toastPromise]) => {
    console.log(coffePromise, toastPromise);
  }
);

//Пример3

const beersPromise = fetch("https://api.sampleapis.com/beers/ale");
const winesPromise = fetch("https://api.sampleapis.com/wines/reds");

Promise.all([beersPromise, winesPromise])
  .then((data) => {
    return Promise.all(data.map((res) => res.json()));
  })
  .then((finalData) => {
    console.log(finalData);
  });
