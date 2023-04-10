const numbers = [1, 2, 3];
[num1, , num3] = numbers;

console.log(num1, num3);

const person = {
  name: 'Pravin',
  age: 30,
};
const { age } = person;

console.log(person.name, age);
