function hello(){
  console.log('Hello', this)
}

const person ={
  name: 'Yevhen',
  age: 18,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function(job, phone){
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
  }
}

const TestPerson ={
  name: 'Olek',
  age: 23
}
//Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение.
const showPersonInfo = person.logInfo.bind(TestPerson, 'Frontend', '123-123-123')
showPersonInfo()
//Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
const showPersonInfo2 = person.logInfo.call(TestPerson, 'Frontend2', '122-122-122')
//Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива
const showPersonInfo3 = person.logInfo.apply(TestPerson, ['Frontend2', '111-111-111'])

//================================================

const array = [1,2,3,4,5]
Array.prototype.multBy = function(n){
  return this.map(function(i){
    return i * n
  })
}
console.log(array.multBy(2))
console.log([4,5,2].multBy(5))