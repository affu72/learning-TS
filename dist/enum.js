// const roles = ["author", "editor", "admin"];
// import * as roles from "./roles";
// type Person = {
//   name: string;
//   email: string;
//   password: string;
//   role: string; // but we may nedd to see the index everyTime.
// };
// const aPerson: Person = {
//   name: "Afzal",
//   email: "a@gmail.com",
//   password: "123",
//   role: roles.EDITOR,
// };
// enum Roles {
//   admin,
//   author,
//   edito,
// }
import { Roles } from "./roles"; // we can import this roles as well
const aPerson = {
    name: "Afzal",
    email: "a@gmail.com",
    password: "123",
    role: Roles.admin,
};
console.log(aPerson);
