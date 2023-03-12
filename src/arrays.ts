//syntax for Array

let a: number[] = [1, 2, 3];

let b: Array<string> = ["a", "b", "c"];

const c: (string | number)[] = [1, 2, "a"];

const d: Array<string | number> = [1, 2, "c"];

//importing data
import airplane, { Airplane } from "./indexSignature.js";

// let airplanes: Airplane[]; //inline definition

//defining custome type
type Airplanes = Airplane[];

//array of airplanes, each element of type Airplane

const airplanes: Airplanes = [
  airplane,

  {
    flightNumber: "abc",
    airplaneModel: "ab204",
    dateOfDeparture: "02/11/2032",
    timeOfDeparture: "23:44",
    to: "DLI",
    from: "MUM",
    seats: {
      "1": "ab",
    },
  },
];
