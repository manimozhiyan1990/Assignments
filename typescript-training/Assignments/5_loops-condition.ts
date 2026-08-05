interface Employee {
    name : string;
    baseSalary : number;
    experience : number ;
    rating : number;
}

let employee : Employee [] = [
     {
        name: "Manimozhiyan",
        baseSalary: 75000,
        experience: 5.1,
        rating: 4.2
    },
    {
        name: "Jency",
        baseSalary: 68000,
        experience: 3.2,
        rating: 3.8
    },
    {
        name: "Sherlin",
        baseSalary: 82000,
        experience: 7.1,
        rating: 4.5
    },
    {
        name: "Mary",
        baseSalary: 90000,
        experience: 10.2,
        rating: 2.5
    },
    {
        name: "Krisha Shree",
        baseSalary: 60000,
        experience: 2.4,
        rating: 3.5
    } 
       
]

function getVariablePay(rating : number) : number {

    if (rating>=4){
        return 15;
    }
    if (rating>=3){
        return 10;
    }
    return 3 ;

}

function getBonus(rating: number): number {

    if (rating >= 4) {
        return 1500;
    }

    if (rating >= 3) {
        return 1200;
    }

    return 300;
}

function getReward(experience:number):number{

    if(experience>5){
        return 5000
    }
    return 0;
}
// main function
function calculateHike(empl : Employee) : number{

    const variablePay = getVariablePay(empl.rating)

    const bouns = getBonus(empl.rating);

    const reward = getReward(empl.experience);

    const hike =(empl.baseSalary*variablePay/100 )+ bouns+reward

    return hike/empl.baseSalary
}

// create map for store key and value
const hikeMap = new Map<string,number>();

for (const emp of employee){

    // This is the first function call.
    const hikePercentage = calculateHike(emp)
//  store the data one by one
    hikeMap.set(emp.name,hikePercentage)
}
console.log("Employee Hike Percentage");

// Take one Key and one Value from the Map.

for (const [name, percentage] of hikeMap) {
// display the data
    console.log(`${name} : ${(percentage * 100).toFixed(2)}`);

    //.toFixed = keep only 2 decimal
}