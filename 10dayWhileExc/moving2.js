function moving(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let index = 3;
    let boxesCount = input[index];
    index++;
    let sum = 0;
    let totalFreeSpace = w * l * h;

    while (boxesCount !== "Done") {
        sum += Number(boxesCount);
        if (sum >= totalFreeSpace) {
            break;
        }
        boxesCount = input[index]
        index++;
    }

    if (totalFreeSpace <= sum) {
        console.log(`No more free space! You need ${sum-totalFreeSpace} Cubic meters more.`);
    } else {
        console.log(`${totalFreeSpace - Number(sum)} Cubic meters left.`);
    }

}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"
])