'use strict';
//  convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}
const convertMinToSecResult = convertMinutesToSeconds(5);
console.log(convertMinToSecResult);
//  greet(name)
function greet(name = 'Jorge') {
  const result = name;
  return result;
}
const greetResult = greet;
console.log(greetResult);
