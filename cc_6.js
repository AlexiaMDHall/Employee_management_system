class Employee {
    constructor ( name, department ) {
        this.name = name;
        this.department = department;
    }
    describe () {
    return `${this.name} | ${this.department} |`
 }
}

const Employees = [

 new Employee ("Allison Jones", "Marketing"),
 new Employee ("Jennifer Davis", "Finance"),
 new Employee("Daniel Ham", "HR"),
 new Employee ("Brianna Doan", "Marketing"),

];
for (let emp of Employees) {
console.log(emp.describe())
}


class Manager extends Employee {
    constructor (name, department, level="Manager", teamSize) {
        super (name,department,level);
        this.teamSize = teamSize;
    }
describe() {
    return `${this.name} | ${this.department} | ${this.teamSize} |`
}
}