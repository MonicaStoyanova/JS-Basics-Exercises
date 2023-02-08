function fooDelivery(input) {

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veganMenuCount = Number(input[2]);

    let chickenPrince = 10.35;
    let fishPrice = 12.40;
    let veganPrice = 8.15;
    let delivery = 2.50;

    totalChicken = chickenMenuCount * chickenPrince;
    totalFish = fishMenuCount * fishPrice;
    totalVegan = veganMenuCount * veganPrice;
    totalMenuPrice = totalChicken + totalFish + totalVegan;

    let desert = totalMenuPrice * 0.2;
    let totalDelivery = totalMenuPrice + desert + delivery;

    console.log(totalDelivery);
}
fooDelivery(["9", "2", "6"])