'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const initial = person.firstName[0] + person.lastName[0];
  return initial;
}
