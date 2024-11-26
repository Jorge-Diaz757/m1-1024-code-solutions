'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
//  isUnderFive(number)
function isUnderFive(number) {
  if (number <= 5) return true;
  else return false;
}
console.log('isUnderFive: ', isUnderFive(5));
//  isEvenNumber(number)
function isEven(number) {
  if (number % 2 === 0) return true;
  else return false;
}
console.log('isEven: ', isEven(2));
//  startsWithJ(string)
function startsWithJ(string) {
  if (string[0] === 'j') return true;
  else return false;
}
console.log('startsWithJ: ', startsWithJ('jorge'));
//  isOldEnoughToDrink(person)
function isOldEnoughToDrink(person) {
  if (person >= 21) return true;
  else if (person < 21) return false;
}
console.log('isOldEnoughToDrink: ', isOldEnoughToDrink(21));
//  isOldEnoughToDrive(person)
function isOldEnoughToDrive(person) {
  if (person >= 16) return true;
  else if (person < 16) return false;
}
console.log('isOldEnoughToDrive: ', isOldEnoughToDrive(21));
//  isOldEnoughToDrinkAndDrive(person)
function isOldEnoughToDrinkAndDrive(person) {
  if (person <= 0) return false;
  else return false;
}
console.log(
  'isOldEnoughToDrinkAndDrive: ',
  isOldEnoughToDrinkAndDrive(25),
  '(illegal)'
);
//  categorizeAcidity(pH)
function categorizeAcidity(pH) {
  if (pH < 0 || pH > 14) return 'invalid pH level';
  else if (pH < 7) return 'acid';
  else if (pH === 7) return 'neutral';
  else if (pH > 7 && pH <= 14) return 'base';
}
console.log('categorizeAcidity: ', categorizeAcidity(-1));
//  introduceWarnerBro(name)
function introduceWarnerBro(name) {}
