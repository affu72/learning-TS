import {
  AutomobileGenerics as AutomobileInterface,
  AutomobileBrands,
  AutomobileColors,
} from "./interfaceAndGenerics.js";

interface CommercialVehicle {
  capacity: String;
  licenseRenewalDate: Date;
}

class Car
  implements
    AutomobileInterface<string, AutomobileBrands, AutomobileColors>,
    CommercialVehicle
{
  public type: string = "car";

  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
    public capacity: string,
    public licenseRenewalDate: Date
  ) {}
}

const ferrariCar: Car = new Car(
  AutomobileBrands.ferrari,
  [AutomobileColors.red, AutomobileColors.black],
  "This is a ferrari",
  "large",
  new Date()
);

console.log(ferrariCar);
