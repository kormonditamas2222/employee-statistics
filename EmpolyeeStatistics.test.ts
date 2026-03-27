import { beforeEach, describe, expect, test } from "vitest";
import { type Employee,  EmployeeStatistics} from "./EmployeeStatistics.js";

let list: Employee[];
let list2: Employee[];

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
});

describe("EmployeeStatistics()", () => {
    test("osztály létrehozása listában elemekkel", () => {
        expect(() => new EmployeeStatistics(list)).not.toThrow();
    })
})