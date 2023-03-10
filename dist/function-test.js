import addNumbers, { addStrings } from "./function.js";
console.log(addNumbers(1, 2));
// console.log(addNumbers(1, "afzal")); not going to work
console.log(addStrings("Afzal", "Nomani"));
console.log(addStrings("Afzal")); //default value
import { printToFile, callBackFun } from "./callBackFunctions.js";
printToFile("Afzal", callBackFun);
