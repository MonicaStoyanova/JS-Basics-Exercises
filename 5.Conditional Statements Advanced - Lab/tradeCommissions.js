function tradeCommissions(input) {

    let city = input[0];
    let vol = Number(input[1]);
    let com = 0;

    if (vol >= 0 && vol <= 500) {
        switch (city) {
            case "Sofia":
                com = vol * 0.05;
                console.log(com.toFixed(2));
                break;
            case "Varna":
                com = vol * 0.045;
                console.log(com.toFixed(2));
                break;
            case "Plovdiv":
                com = vol * 0.055;
                console.log(com.toFixed(2));
                break;
                default:
                    console.log("error");
                    break;
        }
    }else if(vol>500 && vol<= 1000){
        switch (city) {
            case "Sofia":
                com = vol * 0.07;
                console.log(com.toFixed(2));
                break;
            case "Varna":
                com = vol * 0.075;
                console.log(com.toFixed(2));
                break;
            case "Plovdiv":
                com = vol * 0.08;
                console.log(com.toFixed(2));
                break;
                default:
                    console.log("error");
                    break;
    }

}else if(vol>1000 && vol <= 10000){
    switch (city) {
        case "Sofia":
            com = vol * 0.08;
            console.log(com.toFixed(2));
            break;
        case "Varna":
            com = vol * 0.10;
            console.log(com.toFixed(2));
            break;
        case "Plovdiv":
            com = vol * 0.12;
            console.log(com.toFixed(2));
            break;
            default:
                    console.log("error");
                    break;
}
}else if(vol > 10000){
    switch (city) {
        case "Sofia":
            com = vol * 0.12;
            console.log(com.toFixed(2));
            break;
        case "Varna":
            com = vol * 0.13;
            console.log(com.toFixed(2));
            break;
        case "Plovdiv":
            com = vol * 0.145;
            console.log(com.toFixed(2));
            break;
            default:
                    console.log("error");
                    break;

}
}else{
    console.log("error");

}
}
tradeCommissions(["Kaspichan",
"-50"])





