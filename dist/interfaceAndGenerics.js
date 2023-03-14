//Interface and generics
export var AuomobileTypes;
(function (AuomobileTypes) {
    AuomobileTypes["car"] = "car";
    AuomobileTypes["bus"] = "bus";
    AuomobileTypes["bike"] = "bike";
})(AuomobileTypes || (AuomobileTypes = {}));
export var AutomobileBrands;
(function (AutomobileBrands) {
    AutomobileBrands["ferrari"] = "ferrari";
    AutomobileBrands["honda"] = "honda";
    AutomobileBrands["bmw"] = "bmw";
    AutomobileBrands["totota"] = "toyota";
})(AutomobileBrands || (AutomobileBrands = {}));
export var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["red"] = "red";
    AutomobileColors["blue"] = "blue";
    AutomobileColors["black"] = "black";
})(AutomobileColors || (AutomobileColors = {}));
const ferrari = {
    type: AuomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black],
    description: "this is a Ferrari",
};
const honda = {
    type: "bike",
    brand: "honda",
    colors: ["red", "silver"],
    description: "this is honda bike",
};
