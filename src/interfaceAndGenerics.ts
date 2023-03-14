//Interface and generics

export interface AutomobileGenerics<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];

  description: string;
}

export enum AuomobileTypes {
  car = "car",
  bus = "bus",
  bike = "bike",
}

export enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  totota = "toyota",
}

export enum AutomobileColors {
  red = "red",
  blue = "blue",
  black = "black",
}

const ferrari: AutomobileGenerics<
  AuomobileTypes,
  AutomobileBrands,
  AutomobileColors
> = {
  type: AuomobileTypes.car,
  brand: AutomobileBrands.ferrari,
  colors: [AutomobileColors.black],
  description: "this is a Ferrari",
};

const honda: AutomobileGenerics<string, string, string> = {
  type: "bike",
  brand: "honda",
  colors: ["red", "silver"],
  description: "this is honda bike",
};
