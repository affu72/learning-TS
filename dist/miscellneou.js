import { mySelf } from "./bar.js";
// import deepEqual from "deep-equal";
// [] + [];
// "hello" - 1;
function add(a, b) {
    return a + b;
}
const list = [
    {
        id: "foo",
        display: "foo select",
    },
    {
        id: "bar",
        display: "bar select",
    },
];
console.log(list);
const fooIndex = list.map((li) => li.id).indexOf("foo");
console.log(fooIndex);
// **Null vs Undefined
//Something hasn't been initialized : undefined.
//Something is currently unavailable: null.
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(null == undefined); //true
//** optional
function foo(a, b) {
    if (typeof b === "number")
        return { a, b };
    return { a };
}
console.log(foo(10, 5));
console.log(foo(5));
//**this
// const arrowFun = () =>
//   console.log(
//     "'this' will be the surrounding of 'this', but as I am working in strinct environment so this will be undefined " +
//       this
//   );
// arrowFun();
console.log(!!"a");
/***************************** CLASSES ***********************/
class Person {
    id;
    firstName;
    lastName;
    // firstName: string;
    // lastName: string;
    friends = [];
    constructor(id, firstName, lastName) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.friends = [];
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        console.log("calling from object");
    }
    describe() {
        console.log(`Person-${this.id}: ${this.firstName}  ${this.lastName}`);
    }
    addFriends(friend) {
        this.friends.push(friend);
    }
    printFriendList() {
        console.log(this.friends);
    }
}
const person1 = new Person(1, "Afzal", "Nomani");
const name = person1.firstName;
person1.describe();
person1.addFriends("Aditya");
person1.addFriends("Imran");
person1.printFriendList();
//Inheritance
class Student extends Person {
    cources;
    constructor(id, firstname, lastName, cources) {
        super(id, firstname, lastName);
        this.cources = cources;
        this.cources = cources;
    }
}
const stu1 = new Student(2, "karan", "Yadav", ["Node", "React"]);
console.log(stu1);
class Employee extends Person {
    company;
    salary;
    employees = [];
    constructor(id, firstName, lastName, company, salary) {
        super(id, firstName, lastName);
        this.company = company;
        this.salary = salary;
    }
    addEmployee(emp) {
        this.employees.push(emp);
        this.friends.push(emp);
    }
}
const emp1 = new Employee(3, "Kajal", "Jha", "Lumenci", 50000);
emp1.addEmployee("karan");
emp1.printFriendList();
// let user1: InterfacePerson;
// user1 = {
//   name: "Afzal",
//   age: 23,
//   greet(phrase) {
//     console.log(phrase + this.name);
//   },
// };
// console.log(user1.greet("Hi there - I am "));
//module systems
console.log(mySelf);
//Interfaces
// interface Name {
//   first: string;
//   second: string;
// }
// let myName: Name;
// myName = {
//   first: "Afzal",
//   second: "Nomani",
// };
//Inline type annotation
var myName;
myName = {
    first: "Afzal",
    second: "Nomani",
};
//generics
// const reverse = function <T>(arr: T[]): T[] {
//   const reverseArr: T[] = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// };
// function reverse<T>(arr: T[]): T[] {
//   const reverseArr: T[] = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// }
const reverse = (arr) => {
    const reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
};
console.log(reverse(["a", "b"]));
console.log(reverse([1, 2]));
