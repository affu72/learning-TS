var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { mySelf } from "./bar.js";
// import deepEqual from "deep-equal";
// [] + [];
// "hello" - 1;
function add(a, b) {
    return a + b;
}
var list = [
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
var fooIndex = list.map(function (li) { return li.id; }).indexOf("foo");
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
        return { a: a, b: b };
    return { a: a };
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
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
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
    Person.prototype.describe = function () {
        console.log("Person-".concat(this.id, ": ").concat(this.firstName, "  ").concat(this.lastName));
    };
    Person.prototype.addFriends = function (friend) {
        this.friends.push(friend);
    };
    Person.prototype.printFriendList = function () {
        console.log(this.friends);
    };
    return Person;
}());
var person1 = new Person(1, "Afzal", "Nomani");
var name = person1.firstName;
person1.describe();
person1.addFriends("Aditya");
person1.addFriends("Imran");
person1.printFriendList();
//Inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, firstname, lastName, cources) {
        var _this = _super.call(this, id, firstname, lastName) || this;
        _this.cources = cources;
        _this.cources = cources;
        return _this;
    }
    return Student;
}(Person));
var stu1 = new Student(2, "karan", "Yadav", ["Node", "React"]);
console.log(stu1);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName, company, salary) {
        var _this = _super.call(this, id, firstName, lastName) || this;
        _this.company = company;
        _this.salary = salary;
        _this.employees = [];
        return _this;
    }
    Employee.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
        this.friends.push(emp);
    };
    return Employee;
}(Person));
var emp1 = new Employee(3, "Kajal", "Jha", "Lumenci", 50000);
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
var reverse = function (arr) {
    var reverseArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
};
console.log(reverse(["a", "b"]));
console.log(reverse([1, 2]));
