function bonusPoints(input) {
    let num = Number(input[0]);
    let bonus = 0.0;
     
    if (num <= 100) {
     bonus += 5;
    } else if (num > 100 && num <= 1000) {
     bonus += num * 0.20;
    } else if (num > 1000) {
     bonus += num * 0.10;
    }
     
    if (num % 2 == 0) {
     bonus += 1;
    } else if (num % 10 == 5) {
     bonus += 2;
    }
     
    let total = num + bonus;
    console.log(bonus);
    console.log(total);
}
bonusPoints(['2703'])