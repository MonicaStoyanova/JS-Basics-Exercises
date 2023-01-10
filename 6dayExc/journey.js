function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let cost = 0;
    let type = 0;

    if (budget <= 100){
        destination = "Bulgaria";
        if (season == "summer"){
            cost = budget * 0.3;
            type = "Camp";
        }else if(season == "winter"){
            cost = budget * 0.7;
            type = "Hotel"
        }
    }else if(budget<=1000 && budget >100){
        destination = "Balkans";
        if(season == "summer"){
            cost = budget * 0.4;
            type = "Camp"
        }else if(season == "winter"){
            cost = budget * 0.8;
            type = "Hotel"
        }
    }else if(budget > 1000){
        destination = "Europe";
        cost = budget * 0.9;
        type = "Hotel"
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${cost.toFixed(2)}`);
    
}
journey(["1500", "summer"])