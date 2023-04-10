class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person {
  constructor() {
    this.name = 'Pravin';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
