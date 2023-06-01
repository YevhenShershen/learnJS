//ОБЛАСТЬ ВИДИМОСТИ

//Когда константа не найдена в локальной области видимости,
//javascript достигает родительской локальной памяти
//и так далее и так далее
const language = "brazillian portuguese";
const name = "Ana";

function displayIntroduction() {
  const name = "Maria";
  const country = "Brazil";

  function displayInfo() {
    const name = "Joana";
    console.log(
      `My name is ${name}, I'm from ${country} and I speak ${language}`
    );
  }

  return displayInfo();
}

displayIntroduction();
//Существует три типа области видимости:
//глобальная область видимости,
//область действия функции и область видимости блока.

//Области видимости позволяют иметь переменные
//с одинаковыми именами, не сталкиваясь друг с другом.

//Переменные и объекты во внутренних областях недоступны из внешних областей видимости.