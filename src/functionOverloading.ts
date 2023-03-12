interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return { ...obj };
}

function parseCoordinateFromNumber(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}

//function overloading,

function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;

//unknown is something whose value is not defined yet but need to define before using
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate;

  if (typeof arg1 === "object") {
    console.log(arg1);
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate({ x: 1, y: 2 }));
console.log(parseCoordinate(10, 20));
