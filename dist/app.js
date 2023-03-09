"use strict";
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
    constructor(id, firstName, lastName) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.friends = [];
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        // firstName: string;
        // lastName: string;
        this.friends = [];
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
person1.describe();
person1.addFriends("Aditya");
person1.addFriends("Imran");
person1.printFriendList();
//Inheritance
class Student extends Person {
    constructor(id, firstname, lastName, cources) {
        super(id, firstname, lastName);
        this.cources = cources;
        this.cources = cources;
    }
}
const stu1 = new Student(2, "karan", "Yadav", ["Node", "React"]);
console.log(stu1);
// console.log(person1.friends);
// const person1Copy = { describe: person1.describe };
// console.log(person1Copy.describe()); // for this 'this' will be undefined
//quick fix
// const person1Copy = {
//   firstName: "Afz",
//   lastName: "Nom",
//   describe: person1.describe,
// };
// console.log(person1Copy.describe());
