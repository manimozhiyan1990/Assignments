
function subtract(a:number, b:number):void{

    console.log(a-b);
}

subtract(10, 5);

// normal function with return type number
function multiply(a:number, b:number):any{
 return "The value of multifly is :  " + a*b
}
let result = multiply(10, 5);
console.log (result);



function school(city : string , name : string){

    return "hello   "+"  "+name+"  "+city;
}

console.log(school("chennai","svsx"));