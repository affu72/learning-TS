"use strict";
var userName = "Afzal";
var loggedIn = true;
userName += " Herro";
console.log(loggedIn);
var muNumber = 10;
var myRegex = /foo/;
//array declaration
var names = userName.split(" ");
//generic types array
var myValues = [1, 2, 3];
//objects type
var myPerson = {
    firstName: "Afzal",
    lastName: "Nomani",
    //cool: true,
};
var person1 = {
    firstName: "Karan",
    lastName: "Yadav",
};
var person2;
console.log(myPerson.lastName);
//Objects as map
var ids = {
    //this is utility type
    10: "a",
    20: "b",
};
ids[30] = "c";
if (ids[30] === "D") {
}
//type inference
for (var i = 0; i < 10; i++) {
    console.log(i);
}
//forEach loop
[1, 2, 3].forEach(function (value, i, arr) { return console.log(value, i, arr); });
//infer as union type
[1, 2, "c"].forEach(function (value, i, arr) { return console.log(value, i, arr); });
//map
// const output = [1, 2, 3].map((value, index, arr) => value * 10);//number array
var output = [1, 2, 3].map(function (value, index, arr) { return "".concat(value * 10); }); //string[]
