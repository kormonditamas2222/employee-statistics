interface Employee {
    name: string;
    age: number;
    salary: number;
}

class EmployeeStatistics {
    employees: Employee[];
    constructor(employee_list: Employee[]) {
        if (employee_list.length == 0) {
            throw new Error("A dolgozók megadása kötelező")
        }
        this.employees = employee_list;
    }
    getMaxSalary() : number {
        let max = 0;
        for (const employee of this.employees) {
            if (employee.salary > max) {
                max = employee.salary;
            }
        }
        return max;
    }
}