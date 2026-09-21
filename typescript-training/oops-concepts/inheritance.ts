class father{
    fatherName:string;
    fatherAge:number;
    fatherDebit : number;

    constructor( fatherName:string,fatherAge:number,fatherDebit:number){

        this.fatherName =fatherName;
        this.fatherAge =fatherAge;
        this.fatherDebit = fatherDebit;
    } 
        displayFatherDetails():void{
            console.log(`Father's Name: ${this.fatherName}`);
            console.log(`Father's Age: ${this.fatherAge}`);
            console.log(`Father's Debit: ${this.fatherDebit}`);
        }

    }



class son1 extends father{

// constructor(name: string, age: number, debit: number) {
//         super(name, age, debit); 
//     }

}
 const son = new son1("John",45,10000);
    son.displayFatherDetails();

class son2 extends father{

 display() :void {
    console.log(`Son's Name: ${this.fatherName}`);
    console.log(`Son's Age: ${this.fatherAge}`);
    console.log(`Son's Debit: ${this.fatherDebit}`);
}
}

const son22 = new son2("Mike", 40, 8000);
son22.displayFatherDetails();
son22.display();