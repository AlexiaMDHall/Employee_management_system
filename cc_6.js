class Employee {
    constructor ( name, department ) {
        this.name = name;
        this.department = department;
    }
    describe () {
    return `${this.name} | ${this.department} |`
 }
}

class Manager extends Employee {
    constructor (name, department, level="Manager", teamSize) {
        super (name, department,level)
        this.teamSize = teamSize;
    }
describe() {
    return `${this.name} | ${this.department} | ${this.level} | ${this.teamSize} |`
}
}

const Employees = [

 new Manager ("Allison Jones", "Marketing","Manager", 5),
 new Employee ("Jennifer Davis", "Finance", " "),
 new Manager("Daniel Ham", "HR","Manager", 9),
 new Employee ("Brianna Doan", "Marketing","Associate"),

];
for (let emp of Employees) {
console.log(emp.describe())
}

class Company {
    constructor() {
        this.Employees = [];
    }
    addEmployee(Employee) { 
        if (Employee) {
            this.Employees.push(Employee)
            console.log(`Added employee to company`);
        
        }
    }
    listEmployees() {
        console.log('--- Company Employees---');
        this.Employees.forEach((emp,idx) => {
            console.log (`${idx + 1 } ${emp.describe()}`);
        });
    }
}
const myCompany = new Company ();
const emp1 = new Employee ("ALice Burns", "HR")
const emp2 = new Employee ("Tom Spicer", "IT")
const mgr1 = new Manager ("Lexy Hall", "IT")
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);

myCompany.listEmployees();
console.log(myCompany.Employees);