import houses from "./inputs.js";
//Implementation
function findHouses(inputs, filter) {
    let houses = typeof inputs === "string" ? JSON.parse(inputs) : inputs;
    if (filter) {
        houses = houses.filter(filter);
    }
    return houses.map((house) => ({
        id: 0,
        ...house,
    }));
}
console.log(findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"));
console.log(findHouses(houses, ({ planets }) => planets.includes("Arrakis")));
