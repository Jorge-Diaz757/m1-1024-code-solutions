const heroes: string[] = ['Spiderman', 'Deadpool', 'Wolverine', 'IronMan'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);
