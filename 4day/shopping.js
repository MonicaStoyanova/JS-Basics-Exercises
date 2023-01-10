function shopping(input){
    let budget = Number(input[0]);
    let graphicCardCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let graphicCardPrice = 250;
    let cpuPrice = (graphicCardPrice*graphicCardCount)*0.35;
    let ramPrice = (graphicCardPrice*graphicCardCount)*0.1;

    let totalMoneyNeeded = graphicCardCount*graphicCardPrice + cpuCount*cpuPrice + ramCount*ramPrice;
    

    if(graphicCardCount>cpuCount){
        discount = totalMoneyNeeded*0.15;
    }else{
        discount = 0;
    }
    let diff = budget - (totalMoneyNeeded-discount);
    
    if (totalMoneyNeeded-discount<=budget){
        console.log(`You have ${Math.abs(diff).toFixed(2)} leva left!`)
    }else{
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva more!`)
    }
    

}
shopping(["920.45",
"3",
"1",
"1"])

