let customerName: string = "Manimozhiyan";
let creditScore: number = 700;
let income: number = 45000.0;
let isEmployed: boolean = false;
let debtToIcomeRatio: number = 35.0;

function loanEligiblityCheck(customerName: string,
    creditScore: number,
    income: number, isEmployed: boolean,
    debtToIncomeRatio: number): void {
    if (creditScore > 750) {
        console.log(`Customer Name :${customerName}`)
        console.log(`Customer Credit Score is ${creditScore}`)
        console.log("Loan Apporved 'Excellent Credit Score'")
        console.log("========================================================================")
    }
    else if (creditScore > 650 && creditScore < 750) {
        if (income > 50000) {
            if (isEmployed) {
                if (debtToIcomeRatio < 40) {
                    console.log(`Customer Nmae :${customerName}`)
                     console.log(`Customer Credit Score is ${creditScore}`)
                    console.log(`Customer  Debt Ratio is ${debtToIncomeRatio}`)
                    console.log("Loan has been Apporved with condition")
                     console.log("========================================================================")
                }
                else {
                     console.log(`Customer Nmae :${customerName}`)
                    console.log(`Customer  Debt Ratio is ${debtToIncomeRatio}`)
                    console.log("Loan Denied (Debt-to-Income Ratio is 40% or more")
                     console.log("========================================================================")
                }
            }
            else {
                  console.log(`Customer Name :${customerName}`)
        console.log(`Customer Credit Employee status ${isEmployed}`)
                console.log("Loan Rejected.. 'Credit score is above 650 But Applicant is unEmployed'")
                 console.log("========================================================================")
            }
        }
        else {
              console.log(`Customer Name :${customerName}`)
        console.log(`Customer Salary is ${income}`)
            console.log("Loan Denied 'Salary below $55000")
             console.log("========================================================================")
        }

    }


    else {
          console.log(`Customer Name :${customerName}`)
        console.log(`Customer Credit Score is ${creditScore}`)
        console.log("Loan Application Rejected 'your Credit Score is below 650")
         console.log("========================================================================")
    }
}

//=======================Method 1=================================
loanEligiblityCheck(
    customerName,
    creditScore,
    income,
    isEmployed,
    debtToIcomeRatio
); 

//============================= method 2================================
loanEligiblityCheck("manimozhiyan",700,65000,true,35)
loanEligiblityCheck("krisha Shree",680,55000,true,45)
loanEligiblityCheck("jency",680,57000,false,33)
loanEligiblityCheck("mary",550,75000,true,31)