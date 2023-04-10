const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const person = {
  name: 'Pravin',
};

const newPerson = {
  ...person,
  age: 30,
};

console.log(newPerson);

const filter = (...args) => {
  return args.filter((element) => element === 1);
};

console.log(filter(1, 2, 3));
