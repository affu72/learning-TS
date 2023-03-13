//readonly array
let numArr: readonly number[] = [1, 2, 3];

// numArr.push(5);

//read only tples
type ReadOnlyPerson = readonly [a: string, b: string, c: number];
// type ROtuple = Readonly<[string, string, number]>; // long syntax

const readOnlyPeron: ReadOnlyPerson = ["Afzal", "Nomani", 24];

type ReadOnlyStr = Readonly<string[]>; // read only array of string

const stringArr: ReadOnlyStr = ["Af"];

const greetTuple: ReadOnlyPerson = ["Hello", "Goodbye", 23];

type ThreeDCord = [number, number, number];

function add3DCorrd(c1: ThreeDCord, c2: ThreeDCord): ThreeDCord {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCorrd([1, 2, 3], [2, 3, 4]));

// useState tuples

//returns a state and state setter

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;

  return [() => str, (v: string) => (str = v)];
}

//Above one makes closer as well
