function basketball(input){

    let annualTrainingCost = Number(input[0]);

    let shoes = annualTrainingCost - annualTrainingCost * 0.4;
    let clothes = shoes - shoes*0.2;
    let ball = clothes * 0.25;
    let accessoaries = ball * 0.2;

    let total = annualTrainingCost + shoes + clothes + ball + accessoaries;

    console.log(total);
}
basketball(["550"])