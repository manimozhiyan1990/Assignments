// class child {

//     sum(a: number, b: number): void{
//         console.log(a + b);
//     }
//     sum(a: string, b: string): void{
//         console.log(a + b);
//     }   
// complier will throw an error because 
// we cannot have two methods with the same name and different parameters in TypeScript.
//  Instead, we can use method overloading to achieve similar functionality.
// let obj = new child();
// obj.sum(10, 20);
// obj.sum("Hello", "World");