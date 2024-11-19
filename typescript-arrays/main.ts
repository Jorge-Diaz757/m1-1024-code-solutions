const colors: any[] = ['red', 'white', 'blue'];

const color0: string = colors[0];
const color1: string = colors[1];
const color2: string = colors[2];

console.log('value of color[0]:', color0);
console.log('value of color[1]:', color1);
console.log('value of color[2]:', color2);

const americaFlag: string = `America is ${colors[0]} ${colors[1]} and ${colors[2]}`;
console.log(americaFlag);

colors[2] = 'green'; //  Reassign the third color to 'green'
const mexicoFlag: string = `Mexico is ${colors[0]} ${colors[1]} and ${colors[2]}`;
console.log(mexicoFlag);
console.log('Value of colors:', colors);

const students: any[] = ['Goku', 'Vegeta', 'Gohan', 'Trunks'];
const numberOfStudents: number = students.length;
console.log('There are', numberOfStudents, 'students in class');

const lastIndex: any = students[numberOfStudents - 1];
const lastStudent: string = lastIndex;
console.log('The last student in the array is', lastStudent);
console.log('Value of students:', students);
