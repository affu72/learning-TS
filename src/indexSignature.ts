//index signature

export type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;

  seats: {
    [k: string]: string; // this is called index signature, It can take multiple key value pair but must be as specified
  };
};

// export default Airplane;

const airplane: Airplane = {
  flightNumber: "a207",
  airplaneModel: "b76",
  dateOfDeparture: "10/02/1999",
  timeOfDeparture: "11:50",
  from: "DLI",
  to: "NKE",

  seats: {
    "1": "a207",
    "2": "a208",
    "3": "a209",
  },
};

export default airplane;
