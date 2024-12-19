'use strict';
console.log('Hello, world');

//  document.querySelector('h1')
const h1Element = document.querySelector('h1');
console.log("document.querySelector('h1'): ", h1Element);
console.dir(h1Element);

//  document.querySelector('id')
const explanationElement = document.querySelector('#explanation');
console.log("document.querySelector('#explanation'): ", explanationElement);
console.dir(explanationElement);

//  document.querySelector('class')
const hintElement = document.querySelector('hint');
console.log("document.querySelector('hint'): ", hintElement);
console.dir(hintElement);

//  document.querySelectorAll('p')
const p = document.querySelectorAll('p');
console.log("document.querySelectorAll('p'): ", p);

const classElement = document.querySelectorAll('p.example-link');
console.log("document.querySelectorAll('p'): ", classElement);
