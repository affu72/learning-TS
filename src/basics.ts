let userName = "Afzal";
let loggedIn: boolean = true;

userName += " Herro";

console.log(loggedIn);

let muNumber: number = 10;

let myRegex: RegExp = /foo/;

//array declaration
const names: string[] = userName.split(" ");

//generic types array
const myValues: Array<number> = [1, 2, 3];

//objects type

const myPerson: {
  firstName: string;
  lastName: string;
  cool?: boolean;
} = {
  firstName: "Afzal",
  lastName: "Nomani",
  //cool: true,
};

//defining objects using interface keyword, so that can use in future as well.

interface Person {
  firstName: string;
  lastName: string;
}

const person1: Person = {
  firstName: "Karan",
  lastName: "Yadav",
};

let person2: Person;

console.log(myPerson.lastName);

//Objects as map

const ids: Record<number, string> = {
  //this is utility type
  10: "a",
  20: "b",
};

ids[30] = "c";

if (ids[30] === "D") {
}

//type inference

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//forEach loop
[1, 2, 3].forEach((value, i, arr) => console.log(value, i, arr));

//infer as union type
[1, 2, "c"].forEach((value, i, arr) => console.log(value, i, arr));

//map
// const output = [1, 2, 3].map((value, index, arr) => value * 10);//number array
const output = [1, 2, 3].map((value, index, arr) => `${value * 10}`); //string[]
