function repainting(input){

    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let paintThinnerPrice = 5;

    let nylonAmount = Number(input[0]);
    let paintAmount = Number(input[1]);
    let paintThinnerAmount = Number(input[2]);
    let hoursOfWork = Number(input[3]);

    let totalAmountOfPaint = paintAmount + paintAmount*0.10;
    let totalNylon = nylonAmount + 2;
    let plasticbag = 0.40;

    let finalNylonPrice = totalNylon * nylonPrice;
    let finalPaintPrince = totalAmountOfPaint * paintPrice;
    let finalPaintThinnerPrice = paintThinnerAmount * paintThinnerPrice;

    let totalCostSupplies = finalNylonPrice + finalPaintPrince + finalPaintThinnerPrice + plasticbag;
    let workersPay = (totalCostSupplies * 0.3) * hoursOfWork;

    let totalCostOfEverything = workersPay + totalCostSupplies;

    console.log(totalCostOfEverything);

}
repainting(["10","11","4","8"])