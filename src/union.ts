//Union Types

export type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

export type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

const dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

const cat: DogAndCatUnion = {
  name: "Buddy",
  purrs: false,
  barks: false,
};

// const doggy: DogAndCatUnion = {
//   name: "Ana",
//   barks: false,
// };

const dogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  wags: true,
  purrs: false,
  barks: false,
};

type numberOrString = number | string;

function addNumberOrString(a: number | string, b: numberOrString) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString(); // if any of the param is string hen convert another to string then add.
  }
}

console.log(addNumberOrString(2, 3));
console.log(addNumberOrString(2, "afzal"));
// console.log(addNumberOrString(2, null));
