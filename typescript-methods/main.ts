// The Math Object

const heroes: string[] = ['Spiderman', 'Deadpool', 'Wolverine', 'IronMan']; //  Array with four string assigned to the variable heroes
let randomNumber = Math.random(); //  random() method of the Math object returns to the variable randomNumber
randomNumber = randomNumber * heroes.length; //  randomNumber * length property of heroes and result will go to randomNumber
const randomIndex = Math.floor(randomNumber); //  calling the floor() method of the Math Object and pass on RandomNumber,it will return to randomIndex
console.log('randomIndex', randomIndex); // login the value randomIndex to the console... the result is random every time
const randomHero = heroes[randomIndex]; //   accessing the heroes array at randomIndex, the result will go to randomHero
console.log('randomHero', randomHero);

// Array Methods
const library = [
  //  new array with three objects
  { title: 'Book One', author: 'Author One' }, // index 0
  { title: 'Book Two', author: 'Author Two' }, // index 1
  { title: 'Book Three', author: 'Author Three' }, // index2
];
const lastBook = library.pop(); //  calling the pop() method of the library Object and result will go to lastBook
console.log('LastBook:', lastBook);
const firstBook = library.shift(); // calling the shift() method of the library Object and result will go to firstBook
console.log('firstBook:', firstBook);

const js = {
  // two new book objects
  title: 'JavaScript for Impatient Programers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js); //  calling the push() of the library Object and pass js as an argument
library.unshift(css); //  calling the unshift() of the library Object and pass css as an argument
library.splice(1, 1); //  calling the splice() of the library Object ...1 is the starting index and 1 is the number of items to remove
console.log('library:', library);

// Object Methods
const employee = { name: 'Jorge', age: '21', position: 'Apprentice' }; // object that represents an employee providing name, age, and position
const employeeKeys = Object.keys(employee); //  calling the key() method of Object and pass the employee variable as an argument
console.log('employeeKeys: ', employeeKeys);
const employeeValues = Object.values(employee); //  calling the value() method of the Object and pass the employee variable as an argument. result will go to employeeValues
console.log('employeeValues: ', employeeValues);
const employeePairs = Object.entries(employee); //  calling the entries() method of the Object and pass the employee variable as an argument. result will go to employeePairs
console.log('employeePairs: ', employeePairs);
