
interface employee  
     {
        name: string;
        baseSalary: number;
        experience: number;
        rating: number;
    }
    let employee : employee[]= 
     [{
        name: "Manimozhiyan",
        baseSalary: 75000,
        experience: 5.1,
        rating: 4.2
    },
    {name: "mozhiyan",
        baseSalary: 75000,
        experience: 5.1,
        rating: 4.2}];

        employee[0]!.rating=4.5;

        console.log(employee[0]?.rating)

        console.log(Object.keys(employee))

        console.log(Object.values(employee[0]!))

    console.log(Object.entries(employee)[1]![1]);