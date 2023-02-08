function yardGreening(input){

    let totalSquareMeters = Number(input[0]);
    let pricePerSqM = 7.61;
    let discount = 0.18;

    let totalPrice = totalSquareMeters * pricePerSqM;
    let totalDiscount = totalPrice * discount;
    let finalPrice = totalPrice - totalDiscount;

    console.log(`The final price is: ${finalPrice} lv.\nThe discount is: ${totalDiscount} lv.`)
}
yardGreening(['550'])