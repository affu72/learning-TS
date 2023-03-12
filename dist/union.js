//Union Types
const dog = {
    name: "Buddy",
    barks: true,
    wags: true,
};
const cat = {
    name: "Buddy",
    purrs: false,
    barks: false,
};
// const doggy: DogAndCatUnion = {
//   name: "Ana",
//   barks: false,
// };
const dogAndCat = {
    name: "Hybrid",
    wags: true,
    purrs: false,
    barks: false,
};
function addNumberOrString(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString(); // if any of the param is string hen convert another to string then add.
    }
}
console.log(addNumberOrString(2, 3));
console.log(addNumberOrString(2, "afzal"));
export {};
// console.log(addNumberOrString(2, null));
