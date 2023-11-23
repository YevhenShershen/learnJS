//https://learn.javascript.ru/fetch
//Метод fetch()
//let promise = fetch(url, [options])
//url – URL для отправки запроса.
//options – дополнительные параметры: метод, заголовки и так далее.
//fetch всегда возврашает Promise

// fetch("https://api.sampleapis.com/health/professions")
//   .then((data) => {
//     if (data.status === 200) return data.json();
//   })
//   .then((data2) => console.log(data2));

// fetch("https://api.sampleapis.com/health/professions")
//   .then((data) => data.text())
//   .then((data2) => console.log(data2));

// async function test() {
//   let a = "Hello";
//   a = await fetch("https://api.sampleapis.com/health/professions")
//     .then((data) => {
//       if (data.status === 200) {
//         console.log(data);
//         return data.json();
//       }
//     })
//     .then((data2) => data2);

//   // console.log(a);
// }
// test();

//async await
//async-функции всегда возвращают промисы:
