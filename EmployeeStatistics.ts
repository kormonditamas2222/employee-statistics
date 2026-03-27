export interface Employee {
    name: string;
    age: number;
    salary: number;
}

export class EmployeeStatistics {
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
    getAverageAge() : number {
        let sum = 0;
        for (const employee of this.employees) {
            sum += employee.age;
        }
        return sum / this.employees.length;
    }
    getHighestPaidEmployee() : Employee {
        let max = this.getMaxSalary();
        let ourEmployee = this.employees.findIndex(e => e.age == max);
        return this.employees[ourEmployee]!;
    }
    countEmployeesOverSalary(salary: number) : number {
        let count = 0;
        for (const employee of this.employees) {
            if (employee.salary > salary) {
                count++;
            }
        }
        return count;
    }
}