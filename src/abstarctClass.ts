type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  public abstract printHolidays(): void;
}

//abstarct class cannot be intantiated...
// const department: Department = new Department("admin");

class ItDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("IT department");
  }

  public printHolidays() {
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
  protected holidays: Holidays = [];

  constructor() {
    super("Admin department");
  }

  public printHolidays() {
    if (this.holidays.length === 0) {
      console.log("there is no holidays");
    }

    console.log(`here is the list of holidays ${this.name}`);

    this.holidays.forEach((holiday, index) => {
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
    });
  }
}

const itHolidays: Holidays = [
  { date: new Date(12, 25, 2022), reason: "Chrismas" },

  { date: new Date(10, 1, 2021), reason: "sick" },
];

const adminHolidayss: Holidays = [
  { date: new Date(13, 45, 9187), reason: "Chrismas" },

  { date: new Date(10, 1, 2021), reason: "sick" },
];

const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();

itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(itHolidays);

adminDepartment.printHolidays();
itDepartment.printHolidays();
