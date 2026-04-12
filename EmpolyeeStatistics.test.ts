import { beforeEach, describe, expect, test } from "vitest";
import { type Employee,  EmployeeStatistics} from "./EmployeeStatistics.js";

let list: Employee[];
let list2: Employee[];
let lista: Employee[];
let stat1: EmployeeStatistics;
let stat2: EmployeeStatistics;

beforeEach(() => {
    list = [
        {name: "Gipsz Jakab", age: 37, salary: 600000},
        {name: "Minta Ádám", age: 67, salary: 900000},
        {name: "Gertudis Bánkbán", age: 53, salary: 540000}
    ]
    list2 = [
        {name: "Alak Aladár", age: 25, salary: 425000}, 
        {name: "Barna Bernát", age: 42, salary: 1500000},
        {name: "Celldömölki Cecil", age: 35, salary: 800000}
    ]
    lista = [];
    stat1 = new EmployeeStatistics(list);
    stat2 = new EmployeeStatistics(list2);
});

describe("EmployeeStatistics()", () => {
    test("osztály létrehozása listában elemekkel", () => {
        expect(() => stat1).not.toThrow();
    })
    test("osztály létrehozása üres listával", () => {
        expect(() => new EmployeeStatistics(lista)).toThrow();
    })
    test("osztály létrehozása nem létező listával", () => {
        expect(() => new EmployeeStatistics(badList)).toThrow();
    })
})
describe("getMaxSalary()", () => {
    test("függvény helyes végeredmény", () => {
        expect(stat1.getMaxSalary()).toBe(900000);
    })
    test("helyes eredmény másik adathalmazzal", () => {
        expect(stat2.getMaxSalary()).toBe(1500000);
    })
    test("bér nagyobb mint 1000000", () => {
        expect(stat1.getMaxSalary()).not.toBeGreaterThan(1000000);
        expect(stat2.getMaxSalary()).toBeGreaterThan(1000000);
    })
})
describe("getAverageAge()", () => {
    test("helyes eredmény első adathalmazzal", () => {
        expect(stat1.getAverageAge().toPrecision(4)).toBe(52.33.toPrecision(4));
    })
    test("helyes eredmény másik adathalmazzal", () => {
        expect(stat2.getAverageAge()).toBe(34);
    })
    test("helyes eredmény egy amúgy rossz adathalmazzal", () => {
        let zeroList: Employee[] = [
            {name: "feri", age: 0, salary: 211212},
            {name: "matyi", age: 0, salary: 5435335}
        ]
        expect(new EmployeeStatistics(zeroList).getAverageAge()).toBe(0);
    })
})
describe("getHighestPaidEmployee()", () => {
    test("helyes eredmény első adathalmazzal", () => {
        expect(stat1.getHighestPaidEmployee()).toEqual({name: "Minta Ádám", age: 67, salary: 900000})
    })
    test("helyes eredmény másik adathalmazzal", () => {
        expect(stat2.getHighestPaidEmployee()).toEqual({name: "Barna Bernát", age: 42, salary: 1500000})
    })
    test("negatív szám", () => {
        let negList: Employee[] = [
            {name: "feri", age: 32, salary: -1},
            {name: "matyi", age: 23, salary: -2}
        ]
        expect(new EmployeeStatistics(negList).getHighestPaidEmployee()).toBeUndefined();
    })
})
describe("countEmployeesOverSalary()", () => {
    test("0 legyen értékre", () => {
        expect(stat1.countEmployeesOverSalary(900001)).toEqual(0);
    })
    test("0 legyen értékre 2", () => {
        expect(stat2.countEmployeesOverSalary(1500001)).toEqual(0);
    })
    test("valamilyen értékre valami", () => {
        expect(stat1.countEmployeesOverSalary(669422)).toEqual(1);
    })
    test("valamilyen értékre valami 2", () => {
        expect(stat2.countEmployeesOverSalary(733100)).toEqual(2);
    })
    test("3 legyen értékre", () => {
        expect(stat1.countEmployeesOverSalary(13)).toEqual(3);
    })
    test("3 legyen értékre 2", () => {
        expect(stat2.countEmployeesOverSalary(131313)).toEqual(3);
    })
    test("üres bemenet", () => {
        expect(stat1.countEmployeesOverSalary()).toEqual(0); // ez miért van így
    })
    test("szöveg bemenet", () => {
        expect(stat2.countEmployeesOverSalary("count this")).toEqual(0);
    })
})