//Tuples : special type of array having fixed length and type of each element is predefineds

//firstName, lastName, age

// let person: [string, string, number]; // this is a tuple

// person = ["Afzal", "Nomani", 24];

//We can also specify optional element
let person: [string, string, number?]; // this is a tuple

person = ["Afzal", "Nomani"];

//hetrogeous list using tuples

type listOfStudents = [number, boolean, ...string[]]; // tuple

const passingStudents: listOfStudents = [3, true, "John", "Stella", "Mark"];

const failingStudents: listOfStudents = [1, false, "Scot"];
