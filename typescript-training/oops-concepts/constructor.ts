class bike {
    brand : string;
    speed : number;
    yearOfManu:number;

    constructor (brand:string,speed : number,yearOfManu:number){

        this.brand=brand;
        this.speed = speed;
        this.yearOfManu=yearOfManu;
    }

drive(){
    console.log(`Max of speed of the bike is ${this.speed} km/h`)
}
}

const bike1 = new bike("pulsor",120,2020);

bike1.drive();

console.log(bike1.brand)



    