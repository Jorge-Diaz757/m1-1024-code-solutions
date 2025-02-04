'use strict';
function handleFocus(event) {
  console.log('focus event fired');
  const eventTarget = event.target;
  console.log(' event.target.name', eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  const eventTarget = event.target;
  console.log(' event.target.name', eventTarget.name);
}
