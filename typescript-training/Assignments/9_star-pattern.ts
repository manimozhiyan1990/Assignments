//============================================Assignment 3 ==========================================
let rows: number = 5;
// control the rows
for (let i = 1; i <= rows; i++) {

    let printLine: string = "";

    // control the  spaces
    for (let j = 1; j <= rows - i; j++) {
        printLine += " ";
    }

    // print stars
    for (let m = 1; m <= i; m++) {
        printLine += "*";
    }

    console.log(printLine);

   
}
 console.log("=================================================================================")