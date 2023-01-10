function moving(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let totalFreeSpace = w * l * h;
    //let box = 1 * 1 * 1;
    let isDone = false;

    let index = 3;
    let boxCount = input[index];
    let allBoxes = 0;

    if (boxCount === "Done") {
        //console.log(`${totalFreeSpace-boxCount} Cubic meters left.`);
        isDone = true;
    }

    while ((boxCount + allBoxes) <= totalFreeSpace) {
        
        index++;
        allBoxes += Number(boxCount);
    }
    if (!isDone && allBoxes<totalFreeSpace)  {
        console.log(`No more free space! You need ${(allBoxes-totalFreeSpace)} Cubic meters more.`);
    }
    
}


moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"
])