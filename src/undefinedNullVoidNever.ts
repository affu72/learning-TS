//null, undefined

let user: string;

// console.log(user);

// let saveButton = document.getElementById("save");

//console.log(saveButton); // null

let loggedInUserName: string;

const userArr = [
  { name: "Bob", age: 32 },
  { name: "oby", age: 23 },
];

const loggedInUser = userArr.find((user) => user.name === loggedInUserName);

//console.log(loggedInUser.age); // udndefined

let saveButton: HTMLElement = document.getElementById("save")!;
