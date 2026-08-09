interface Employee {
    name: string;
    age: number;
    city: string;
    salary?: number;
}

let employee :Employee = {
    name: "Mani",
    age: 36,
    city: "Chennai"
};

console.log(employee);
console.log(employee.name);

employee.salary = 50000;

console.log(employee);

console.log(typeof employee);

console.log(Object.keys(employee));

console.log(Object.values(employee));

console.log(Object.entries(employee));