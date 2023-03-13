"use strict";
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["months"] = "months";
    AgeUnit["years"] = "years";
})(AgeUnit || (AgeUnit = {}));
const newPerson = {
    name: "Afzal",
    age: 24,
    ageUnit: AgeUnit.years,
    country: "India",
};
function convertAgeToMonths(person) {
    person.age *= 12;
    person.ageUnit = AgeUnit.months;
}
convertAgeToMonths(newPerson);
console.log(newPerson);
// I am not able to understand this syntax of function overloading
const reserveFunction = function (departureDate, departingFrom, destination, returndate) {
    if (returndate) {
        return {
            departureDate,
            returndate,
            departingFrom,
            destination,
        };
    }
    else {
        return { departureDate, departingFrom, destination };
    }
};
function doSomething(fn, arg) {
    console.log(fn.description + " returned " + fn(arg));
}
const myfun = function (someArg) {
    return someArg === 2;
};
myfun.description = "Hello";
doSomething(myfun, 6);
