import { beforeEach } from "vitest";
import { type Employee,  EmployeeStatistics} from "./EmployeeStatistics.js";

let list: Employee[];
beforeEach(() => {
    list = [
        {name: "Gipsz Jakab", age: 37, salary: 600000},
        {name: "Minta Ádám", age: 67, salary: 900000},
        {name: "Gertudis Bánkbán", age: 53, salary: 540000}
    ]
});

