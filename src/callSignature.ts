enum AgeUnit {
  months = "months",
  years = "years",
}

type Person = {
  name: string;
  age: number;
  country: string;
  ageUnit: AgeUnit;
};

const newPerson: Person = {
  name: "Afzal",
  age: 24,
  ageUnit: AgeUnit.years,
  country: "India",
};

function convertAgeToMonths(person: Person): void {
  person.age *= 12;
  person.ageUnit = AgeUnit.months;
}

convertAgeToMonths(newPerson);
console.log(newPerson);

//function overloading ->

type Reservation = {
  departureDate: Date;
  returndate?: Date;
  departingFrom: string;
  destination: string;
};

//call signature for reserve function, it is a shorthand signature

// type Reserve = (
//   departureDate: Date,
//   returndate: Date,
//   departingFrom: string,
//   destination: string
// ) => Reservation;

//we can call this same function in multiple way with different parameter and defferent return value depending upon the kind of argument.

//we can assign multiple call signature to a single function type

//more explicite sintax

type Reserve = {
  // desription: string;
  (
    departureDate: Date,
    departingFrom: string,
    destination: string,
    returndate?: Date
  ): Reservation;

  (
    departureDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation;
};

// I am not able to understand this syntax of function overloading

const reserveFunction: Reserve = function (
  departureDate: Date,
  departingFrom: string,
  destination: string,
  returndate?: Date
): Reservation {
  if (returndate) {
    return {
      departureDate,
      returndate,
      departingFrom,
      destination,
    };
  } else {
    return { departureDate, departingFrom, destination };
  }
};

// reserveFunction.desription = "hello";

// const reserveFunction: Reserve = (
//   departureDate: Date,
//   returnDateOrDepartingFrom: Date | string,
//   departingFromOrDestinantion: string,
//   destination?: string
// ) => {
//   if returndateOrDepartingFrom instanceof Date && destination){
//     return {
//       departureDate,
//       returndate:returnDateOrDepartingFrom,
//       departingFrom:
//     }
//   }
// };

// const reserveTct = reserveFunction(new Date(), "delhi", "Mumbai");

// console.log(reserveTct);
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction, arg: number) {
  console.log(fn.description + " returned " + fn(arg));
}

const myfun: DescribableFunction = function (someArg: number): boolean {
  return someArg === 2;
};

myfun.description = "Hello";
doSomething(myfun, 6);
