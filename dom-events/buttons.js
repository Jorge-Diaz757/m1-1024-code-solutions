'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList query failed');
$taskList.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  console.log('Clicked element:', $eventTarget);
  console.log('Tag name:', $eventTarget.tagName);
  if ($eventTarget.tagName !== 'BUTTON') {
    return;
  }
  const $taskListItem = $eventTarget.closest('.task-list-item');
  console.log('Closest .task-list-item:', $taskListItem);
  $taskListItem?.remove();
});
