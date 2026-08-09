interface Employee {

    empId: number;

    empName: string;

    salary: number;

    experience: number;

    rating: number;

    isPermanent: boolean;

    address: Address;

}

interface Address{
        city: string;
    state: string;
    country: string;

}
const employees: Employee[] = [

    {
        empId: 101,
        empName: "Mani",
        salary: 50000,
        experience: 5,
        rating: 4.5,
        isPermanent: true,

        address: {
            city: "Chennai",
            state: "Tamil Nadu",
            country: "India"
        }
    },

    {
        empId: 102,
        empName: "Jency",
        salary: 65000,
        experience: 6,
        rating: 4.8,
        isPermanent: true,

        address: {
            city: "Trichy",
            state: "Tamil Nadu",
            country: "India"
        }
    },

    {
        empId: 103,
        empName: "Krisha",
        salary: 45000,
        experience: 2,
        rating: 4.2,
        isPermanent: false,

        address: {
            city: "Madurai",
            state: "Tamil Nadu",
            country: "India"
        }
    }

];

console.log(employees);
//loops
for(let emp of employees){
    console.log(emp.empName)
    console.log(emp.address)}