/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!



const firstName='Carlos';
const lastName='Stevenson'; 
const birthYear=1947;
const thisYear=1965;
const fullName= firstName +' '+ lastName;
const age= thisYear - birthYear;
const greeting= `Hello! My name is ${fullName} and I am ${age} years old.`;

// Do not change this
module.exports = {
  firstName,
  lastName,
  thisYear,
  birthYear,
  greeting,
  fullName,
  age,
}
