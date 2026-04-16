class Person {
  age = 25;

  get location() {
    return "mumbai";
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let person1 = new Person("shahji", "Jadhav");

console.log(person1);               // full object
console.log(person1.location);      // "mumbai"
console.log(person1.constructor);   // class Person