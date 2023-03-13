let userName = "Afzal";
let loggedIn = true;
userName += " Herro";
console.log(loggedIn);
let muNumber = 10;
let myRegex = /foo/;
//array declaration
const names = userName.split(" ");
//generic types array
const myValues = [1, 2, 3];
//objects type
const myPerson = {
    firstName: "Afzal",
    lastName: "Nomani",
    //cool: true,
};
const person1 = {
    firstName: "Karan",
    lastName: "Yadav",
};
let person2;
console.log(myPerson.lastName);
//Objects as map
const ids = {
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
export {};
