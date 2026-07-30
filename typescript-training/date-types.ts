let num1 :number = 25;
let num2 :number =23;
console.log(typeof num1);
console.log(typeof num2);

// num1 = "manimozhiyan";
// console.log(num1)

let firstName :string = "mani";
let lastName :string = "mozhiyan";
let role: string ="'Junior' QA tester"

console.log(firstName);
console.log(lastName);
console.log(role);

let empId:undefined;
console.log(empId);

let salary:null =null;

console.log(salary);

let empAddress: string | number|boolean= "chennai";
console.log(empAddress);

empAddress = "600001";
console.log(empAddress);


interface empInfo  {
    "name" : "manimozhiyan",
    "id"  : 1234,
    "visaStatus" : "true"
}
let empData:empInfo= {
    "name" : "manimozhiyan",
    "id"  : 1234,
    "visaStatus" : "true"
}
console.log(empData.id);

let fruits : string[] = ["Apple","Banana","Mango"];
let fruitsAndPrices : (number|string)[]=["Apple","200"]
console.log(fruitsAndPrices);

//tuple

let empInformation : [string ,number,boolean]=["mani",1234,];
console.log(empInformation);