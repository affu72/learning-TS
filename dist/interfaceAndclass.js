import { AutomobileBrands, AutomobileColors, } from "./interfaceAndGenerics.js";
class Car {
    brand;
    colors;
    description;
    capacity;
    licenseRenewalDate;
    type = "car";
    constructor(brand, colors, description, capacity, licenseRenewalDate) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.capacity = capacity;
        this.licenseRenewalDate = licenseRenewalDate;
    }
}
const ferrariCar = new Car(AutomobileBrands.ferrari, [AutomobileColors.red, AutomobileColors.black], "This is a ferrari", "large", new Date());
console.log(ferrariCar);
