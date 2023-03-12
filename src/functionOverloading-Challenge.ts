import houses from "./inputs.js";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWidthID extends House {
  id: number;
}

function findHouses(houses: string): HouseWidthID[];

function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWidthID[];

function findHouses(houses: House[]): HouseWidthID[];

function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWidthID[];

//Implementation
function findHouses(
  inputs: House[] | string,
  filter?: (house: House) => boolean
): HouseWidthID[] {
  let houses: House[] =
    typeof inputs === "string" ? JSON.parse(inputs) : inputs;

  if (filter) {
    houses = houses.filter(filter);
  }

  return houses.map((house) => ({
    id: 0,
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ planets }) => planets.includes("Arrakis")));
