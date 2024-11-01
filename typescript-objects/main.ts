interface studentProps {
  // interface for studentProps
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface vehicle {
  //  interface for vehicle
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  //  interface for pet
  name?: string;
  kind?: string;
}

const student: studentProps = {
  //  object for studentProps
  firstName: 'Jorge',
  lastName: 'Diaz Martinez',
  age: 21,
  livesInIrvine: false,
  previousOccupation: 'construction',
};

const Vehicle: vehicle = {
  // object for vehicle
  make: 'Chevrolet',
  model: 'c1500',
  year: 1991,
  color: ' gray and blue',
  isConvertible: false,
};

const pet: Pet = {
  // object for pet
  name: 'Quesito',
  kind: 'Goat',
};

const fullName: string = student.firstName + '  ' + student.lastName; //  dot notation for student first and last name
console.log('Value of fullName: ', fullName); //  value of fullName

student.livesInIrvine = false; // boolean for livesInIrvine
student.previousOccupation = 'construction'; // string for previous occupation
console.log('Value of livesInIrvine:', student.livesInIrvine); // value of livesInIrvine
console.log('value of previousOccupation:', student.previousOccupation); // value of previousOccupation
console.log('Value of student:', student); // value of student
console.log('typeof student:', typeof student); //  typeof studnet

Vehicle['color'] = 'gray and blue'; //  bracket notation for Vehicle
Vehicle['isConvertible'] = false; // boolean of isConvertible
console.log('Value of color:', Vehicle['color']); //  value of color
console.log('Value of isConvertible', Vehicle['isConvertible']); // value of isConvertible
console.log(Vehicle); //  entire Vehicle object
console.log('typeof Vehicle:', typeof Vehicle); //  typeof Vehicle

delete pet.name; // delete operator for pet
delete pet.kind;
console.log('value of pet:', pet); // value of pet
console.log('typeof pet:', typeof pet); //  typeof pet
