function handleFocus(event: Event): void {
  console.log('focus event fired');

  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(' event.target.name', eventTarget.name);
}
function handleBlur(event: Event): void {
  console.log('blur event fired');

  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(' event.target.name', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(' value of', eventTarget.name + ':', eventTarget.name);
}

const $nameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $messageInput = document.querySelector('#user-message');

if (!$nameInput) throw new Error('$nameInput query failed');
if (!$emailInput) throw new Error('$emailInput query failed');
if (!$messageInput) throw new Error('$messageInput query failed');

$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('input', handleInput);
$messageInput.addEventListener('input', handleInput);
$nameInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('blur', handleBlur);
$messageInput.addEventListener('blur', handleBlur);
