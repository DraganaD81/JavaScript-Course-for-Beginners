let person = {
  name: "Mosh",
  age: 30,
};

// Dot Notation
person.name = "John";

// Bracket Notation
let selection = "name";
person[selection] = "Mary";

console.log(person.name);
