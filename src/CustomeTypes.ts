//inline syntax to declare type of object

// let article: {
//   author: string;
//   content: string;
//   title: string;
//   image?: string;
// };

//The better way is using 'type' to alias a Type, OR 'CUSTOM TYPE '
type Article = {
  author: string;
  content: string;
  title: string;
  image?: string;
};

const article: Article = {
  author: "Stella",
  content: "hello World",
  title: "hello",
};

//reusing custome types
const post: Article = {
  author: "Sam",
  content: "hello",
  title: "hello",
};

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type AirPlane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  // caterer: {
  //   name: string;
  //   address: string;
  //   phone: number;
  // };

  caterer: Caterer;
};
