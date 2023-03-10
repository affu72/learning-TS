//callback functions
export function printToFile(text: string, callback: (a: string) => void): void {
  callback("Printing " + text);
}

export const callBackFun = function (s: string): void {
  console.log(s);
};

//array mutation

//function as a type

export type MutationFunction = (num: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction) {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

const newMutatuionFun: MutationFunction = (v: number) => v * 100;

//adder type
export type Adder = (num: number) => number; //receive a number and return a number

const createAdder = function (num: number): Adder {
  return (val: number) => num + val;
};

const addOne = createAdder(1);
console.log(addOne(55));
console.log(addOne(65));
