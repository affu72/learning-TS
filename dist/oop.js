"use strict";
// class User {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     console.log("called");
//   }
// }
// const userObj: User = new User("Afzal", "afzal@gmail.com", 24);
// //inheritance
// class AdminUser extends User {
//   isAdmin: boolean = true;
//   userReporting: number;
//   constructor(name: string, email: string, age: number, userReporting: number) {
//     super(name, email, age);
//     this.userReporting = userReporting;
//   }
//   print() {
//     console.log(this.isAdmin);
//   }
// }
// const admin: AdminUser = new AdminUser("mark", "mark@gmail.com", 56, 20);
// console.log(userObj, admin);
// admin.print();
class User {
    name;
    email;
    age;
    // protected name: string;
    // private email: string;
    // public age: number;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        // this.name = name;
        // this.email = email;
        // this.age = age;
        // console.log("called");
    }
    getname() {
        return this.name;
    }
}
const userObj = new User("Afzal", "afzal@gmail.com", 24);
// userObj.name = "Mike";
console.log(userObj.getname());
console.log(userObj);
//inheritance
class AdminUser extends User {
    isAdmin = true;
    userReporting;
    constructor(name, email, age, userReporting) {
        super(name, email, age);
        this.userReporting = userReporting;
    }
    returnName() {
        return this.name; // it says property is private, so we need to make it protected
    }
}
const admin = new AdminUser("Milly", "mark@gmail.com", 23, 4);
console.log(admin.returnName());
//Getters and Setters
// We may set up age logic in constructor but it will not be good
// 1. constructor function will be more code ,
// 2. As constructor only called once if we want to change the age later on then we again need to check.
// 3. someone may change the age from outside if it is private
class PersonClass {
    _name;
    email;
    _age;
    // private _age: number | undefined;
    testUserAge(age) {
        if (age > 200 || age < 0)
            throw new Error("Age must be between 0-200");
        return age;
    }
    constructor(_name, email, _age) {
        this._name = _name;
        this.email = email;
        this._age = _age;
        // if (age > 200 || age < 0) throw new Error("Age must be between 0-200");
        this.testUserAge(_age);
        this._age = _age;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this.testUserAge(age);
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
// const john: PersonClass = new PersonClass("John", 240, "gmail");
// const mark: PersonClass = new PersonClass("mark", -42, "hotmail");
const john = new PersonClass("John", "gmail", 24);
// console.log(john.age);
console.log(john.age);
