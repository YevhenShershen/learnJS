//https://habr.com/ru/articles/351890/
//https://habr.com/ru/articles/590679/

const url = "https://jsonplaceholder.typicode.com/todos";
async function getDataFromServer() {
  const a = await fetch(url)
    .then((data) => data.json())
    .then((data) => data);
  console.log("REST API");
  console.log(a);
}
getDataFromServer();

// async function test() {
//   let q = 10;
//   await setTimeout(() => {
//     q = 15;
//   }, 1000);
//   console.log(q);
// }
// test();
function delay(callback, duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function test() {
  let q = 10;
  await delay(() => {
    q = 15;
    console.log(q);
  }, 1000);
  console.log(q);
}

test().then();
