const person = {
  firstName: "Tom",
  lastName: "Cruise",
  actor: true,
  age: 54 //made up
};

var lastName = person.lastName;
var age = person.age;
var actor = person.actor;

const { lastName, age, actor } = person;

// add({ age, lastName})

// const { firstName: name, age } = person;

// On array

const a = [1, 2, 3, 4, 5];
[first, second, , , fiveth] = a;
console.log(fiveth);
