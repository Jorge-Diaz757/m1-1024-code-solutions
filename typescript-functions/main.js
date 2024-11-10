'use strict';
//  convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}
const convertMinToSecResult = convertMinutesToSeconds(5);
console.log('convertMinToSecResult:', convertMinToSecResult);
//  greet(name)
function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
const greetResult = greet('Jorge');
console.log('greetResult:', greetResult);
//  getArea(width, height)
const getArea = (width, height) => {
  const area = width * height;
  return area;
};
const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);
const getFirstName = (person) => {
  const firstName = person.firstName;
  return firstName;
};
const getFirstNameResult = getFirstName({
  firstName: 'Jorge',
  lastName: 'Diaz',
});
console.log('getFirstNameResult:', getFirstNameResult);
//  getLastElement(array)
const getLastElement = (array) => {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
};
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accesories',
]);
console.log('getLastElementResult:', getLastElementResult);
//  callOtherFunction(otherFunction, params)
function callOtherFunctions(otherFunction, Params) {
  return otherFunction(Params);
}
const callOtherFunctionResult = callOtherFunctions(convertMinutesToSeconds, 10);
console.log('callOtherFunctionResult: ', callOtherFunctionResult);
//  callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResults = callOtherFunction(getLastElement, [
  'propane',
  'and',
  'propane',
  'accesories',
]);
console.log('callOtherFunctionResults:', callOtherFunctionResults);
