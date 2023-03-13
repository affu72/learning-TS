"use strict";
//call signature of different types of filter function
const filter = (array, predicate) => {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (predicate(item))
            resultArray.push(item);
    }
    return resultArray;
};
let numberArr = [1, 2, 3, 4, 5, 10, 12, 9];
function greaterThanSeven(item) {
    return item > 7;
}
console.log(filter(numberArr, greaterThanSeven));
let animal = ["cat", "cat", "fog", "rat", "lion"];
function filterCats(item) {
    return item === "cat";
}
console.log(filter(animal, filterCats));
//No bs-ts generics
//use state
// function simpleStringState(
//   initial: string
// ): [() => string, (v: string) => void] {
//   let val: string = initial;
//   return [
//     () => val,
//     (v: string) => {
//       val = v;
//     },
//   ];
// }
function simpleState(initial) {
    let val = initial;
    return [
        () => val,
        (v) => {
            val = v;
        },
    ];
}
const [state1Getter, state1Setter] = simpleState("Afzal");
console.log(state1Getter()); // Afzal
state1Setter("Nomani");
console.log(state1Getter()); // Nomani
//over roiding generic function
const [state2Getter, state2Setter] = simpleState(null);
console.log(state2Getter());
state2Setter("Nomani");
console.log(state2Getter());
//example-2
function ranker(items, rank) {
    const ranks = items.map((item) => ({ item, rank: rank(item) }));
    ranks.sort((a, b) => a.rank - b.rank);
}
//GENERICS YET NOT 100% CLEAR.
