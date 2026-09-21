abstract class family {

properties():void;

    loan():void{
        console.log("Family takes a loan");
    }
}

class father extends family {
    properties(): void {
        console.log("Father has properties");
    }
}

let obj = new father();
obj.properties();
obj.loan();