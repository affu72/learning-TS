"use strict";
class Automobile {
    static color = "red";
    static calculateMileage(miles, liters) {
        return miles / liters;
    }
}
console.log(Automobile.color);
console.log(Automobile.calculateMileage(50, 10));
const auto = new Automobile();
console.log(auto);
