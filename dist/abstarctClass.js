"use strict";
class Department {
    name;
    constructor(name) {
        this.name = name;
    }
    addHolidays(holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
//abstarct class cannot be intantiated...
// const department: Department = new Department("admin");
class ItDepartment extends Department {
    holidays = [];
    constructor() {
        super("IT department");
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            console.log("there is no holidays");
        }
        console.log(`here is the list of holidays ${this.name}`);
        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
        });
    }
}
class AdminDepartment extends Department {
    holidays = [];
    constructor() {
        super("Admin department");
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            console.log("there is no holidays");
        }
        console.log(`here is the list of holidays ${this.name}`);
        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
        });
    }
}
const itHolidays = [
    { date: new Date(12, 25, 2022), reason: "Chrismas" },
    { date: new Date(10, 1, 2021), reason: "sick" },
];
const adminHolidayss = [
    { date: new Date(13, 45, 9187), reason: "Chrismas" },
    { date: new Date(10, 1, 2021), reason: "sick" },
];
const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(itHolidays);
adminDepartment.printHolidays();
itDepartment.printHolidays();
