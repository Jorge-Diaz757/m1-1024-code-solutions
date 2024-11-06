//  convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes: number): number {
  const result: number = minutes * 60;
  return result;
}
const convertMinToSecResult: number = convertMinutesToSeconds(5);
console.log(convertMinToSecResult);

//  greet(name)
function greet(name: string = 'Jorge'): string {
  const result: string = name;
  return result;
}
const greetResult: any = greet;
console.log(greetResult);
