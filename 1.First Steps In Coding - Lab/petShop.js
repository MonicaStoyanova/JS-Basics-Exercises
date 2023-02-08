function petShop(input) {

    let dogPacs = Number(input[0]);
    let catPacs = Number(input[1]);

    let dogPrice = 2.50;
    let catPrice = 4;

    let totalMoneyNeeded = dogPacs*dogPrice + catPacs*catPrice;

    console.log(`${totalMoneyNeeded} lv.`)
}
petShop(["5 ","4 "])