function printDiamond(n: number): void {

   
    for (let i = 1; i <= n; i++) {

        let row = "";

        // spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // numbers
        for (let k = 1; k <= i; k++) {
            row += k + " ";
        }

        console.log(row);
    }

    
    for (let i = n - 1; i >= 1; i--) {

        let row = "";

        // spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // numbers
        for (let k = 1; k <= i; k++) {
            row += k + " ";
        }

        console.log(row);
    }
}

// call function
printDiamond(5);