function deposit(input){
    let theDepositedSum = Number(input[0]);
    let term = Number(input[1]);
    let annualPercentage = Number(input[2]);

    let yearInterestRate = theDepositedSum * (annualPercentage/100);
    let monthlyInterestRate = yearInterestRate/12;
    let totalSum = theDepositedSum+term*monthlyInterestRate;
    console.log (totalSum)

}
deposit(["2350","6 ","7 "])
