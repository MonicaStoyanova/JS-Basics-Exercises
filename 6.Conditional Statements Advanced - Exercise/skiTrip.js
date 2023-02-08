function skiTrip(input){

    let dayCount = Number(input[0]);
    let type = input[1];
    let grade = input[2];

    switch(type){
        case "room for one person":
            price = (dayCount - 1) * 18;
            break;
        case "apartment":
            price = (dayCount - 1) * 25;
            if(dayCount<10){
                price = price * 0.70;
            }else if(dayCount>=10 && dayCount <=15){
                price = price * 0.65;
            }else{
                price = price * 0.50;
            }
            break;
        case "president apartment":
            price = (dayCount - 1) * 35;
            if(dayCount < 10){
                price = price * 90;
            }else if(dayCount >= 10 && dayCount <=15){
                price = price * 0.85;
            }else{
                price = price * 0.80;
            }
            break;
    }
    if(grade === "positive"){
        price = price * 1.25;
    }else{
        price = price * 0.90;
    }
    console.log(price.toFixed(2));

}
skiTrip(["2",
"apartment",
"positive"])

