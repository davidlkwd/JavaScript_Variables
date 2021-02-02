console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "David";
let lastName = "Herrbach";
var myAge = 41;

console.log(firstName);
console.log(lastName);
console.log(myAge);

// Exercise 2
let fullNameLastName = firstName + " " + lastName;
let templateLiteralFullName = `${firstName} ${lastName}`;

console.log(fullNameLastName);
console.log(templateLiteralFullName);

// Exercise 3
let fullName = "David Herrbach";
let city = "Lakewood";
let pastime = "Golf";

let myStory = `Hello! My name is ${fullName}. I live in ${city}, California. I enjoy ${pastime} and learning to code.`;

console.log(myStory);
