/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person: any): any {
  const description: any = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return description;
}
