"use strict";
function parseCoordinateFromObject(obj) {
    return { ...obj };
}
function parseCoordinateFromNumber(x, y) {
    return {
        x,
        y,
    };
}
//unknown is something whose value is not defined yet but need to define before using
function parseCoordinate(arg1, arg2) {
    let coord;
    if (typeof arg1 === "object") {
        console.log(arg1);
        coord = {
            ...arg1,
        };
    }
    else {
        coord = {
            x: arg1,
            y: arg2,
        };
    }
    return coord;
}
console.log(parseCoordinate({ x: 1, y: 2 }));
console.log(parseCoordinate(10, 20));
