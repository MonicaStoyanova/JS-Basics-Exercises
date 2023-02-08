function suplies(input){
    let packOfPens = Number(input[0]);
    let markers = Number(input[1]);
    let literOfDetergent = Number (input[2]);
    let discountPercentage = Number (input[3]);

    let packOfPensPrice = 5.80;
    let packOfMarkersPrice = 7.20;
    let pricePerLiterDetergent = 1.20;

    let totalPrice = packOfPens * packOfPensPrice + markers * packOfMarkersPrice + literOfDetergent * pricePerLiterDetergent;
    let finalPrice = totalPrice - totalPrice * 0.25;

    console.log(finalPrice);
}
suplies(["2","3","4","25"])