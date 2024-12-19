# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  // to see the result of our code and see if it is working correctly
- What is a "model"?
  // is a representation of a web pages content in the form of objects
- Which "document" is being referred to in the phrase Document Object Model?
  // HTML documents
- What is the word "object" referring to in the phrase Document Object Model?
  // it refers to HTML elements as objects
- What is a DOM Tree?
  // It's referencing the tree-like structure of HTML elements
- Give two examples of `document` methods that retrieve a single element from the DOM.
  // <body>, <header>
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  // document.querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
  // to reuse the selected elements, manipulate them or perform actions without querying the DOM multiple times.
- What `console` method allows you to inspect the properties of a DOM element object?
  // console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  // to ensure that the DOM is fully loaded before the JavaScript code runs
- What does `document.querySelector()` take as its argument and what does it return?
  // takes a CSS selector as its argument and returns the first element that matches the selector, or null if no element matches
- What does `document.querySelectorAll()` take as its argument and what does it return?
  // takes a CSS selector as its argument and It returns a NodeList of all elements that match the selector.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
