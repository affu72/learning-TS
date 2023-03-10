//callback functions
export function printToFile(text, callback) {
    callback("Printing " + text);
}
export const callBackFun = function (s) {
    console.log(s);
};
export function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
console.log(arrayMutate([1, 2, 3], (v) => v * 10));
const newMutatuionFun = (v) => v * 100;
const createAdder = function (num) {
    return (val) => num + val;
};
const addOne = createAdder(1);
console.log(addOne(55));
console.log(addOne(65));
