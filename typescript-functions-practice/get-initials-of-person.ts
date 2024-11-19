/* exported getInitialsOfPerson */
function getInitialsOfPerson(person: any): any {
  const initial: any = person.firstName[0] + person.lastName[0];
  return initial;
}
