//  convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes: number): number {
  const result: number = minutes * 60;
  return result;
}
const convertMinToSecResult: number = convertMinutesToSeconds(5);
console.log('convertMinToSecResult:', convertMinToSecResult);

//  greet(name)
function greet(name: string): string {
  const greeting: string = 'Hey, ' + name;
  return greeting;
}
const greetResult: string = greet('Jorge');
console.log('greetResult:', greetResult);

//  getArea(width, height)
const getArea = (width: number, height: number): number => {
  const area: number = width * height;
  return area;
};
const getAreaResult: number = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

//  getFirstPersonName(person)
interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (person: Person): string => {
  const firstName: string = person.firstName;
  return firstName;
};
const getFirstNameResult: string = getFirstName({
  firstName: 'Jorge',
  lastName: 'Diaz',
});
console.log('getFirstNameResult:', getFirstNameResult);

//  getLastElement(array)
const getLastElement = (array: string[]): string => {
  const lastIndex: number = array.length - 1;
  const lastElement: string = array[lastIndex];
  return lastElement;
};
const getLastElementResult: string = getLastElement([
  'propane',
  'and',
  'propane',
  'accesories',
]);
console.log('getLastElementResult:', getLastElementResult);

//  callOtherFunction(otherFunction, params)
function callOtherFunctions(otherFunction: Function, Params: unknown): any {
  return otherFunction(Params);
}
const callOtherFunctionResult: number = callOtherFunctions(
  convertMinutesToSeconds,
  10
);
console.log('callOtherFunctionResult: ', callOtherFunctionResult);

//  callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
const callOtherFunctionResults: number = callOtherFunction(getLastElement, [
  'propane',
  'and',
  'propane',
  'accesories',
]);
console.log('callOtherFunctionResults:', callOtherFunctionResults);
