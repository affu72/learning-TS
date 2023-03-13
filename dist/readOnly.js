"use strict";
//readonly array
let numArr = [1, 2, 3];
// type ROtuple = Readonly<[string, string, number]>; // long syntax
const readOnlyPeron = ["Afzal", "Nomani", 24];
const stringArr = ["Af"];
const greetTuple = ["Hello", "Goodbye", 23];
function add3DCorrd(c1, c2) {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
console.log(add3DCorrd([1, 2, 3], [2, 3, 4]));
// useState tuples
//returns a state and state setter
function simpleStringState(initial) {
    let str = initial;
    return [() => str, (v) => (str = v)];
}
//Above one makes closer as well
