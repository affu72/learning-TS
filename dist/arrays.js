//syntax for Array
let a = [1, 2, 3];
let b = ["a", "b", "c"];
const c = [1, 2, "a"];
const d = [1, 2, "c"];
//importing data
import airplane from "./indexSignature.js";
//array of airplanes, each element of type Airplane
const airplanes = [
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
