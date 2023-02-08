function lunchBreak(input){
    let name = input[0];
    let epDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let timeForLunch = restDuration / 8;
    let freeTime = restDuration / 4;

    let totalFreeTime = restDuration-timeForLunch-freeTime;
    let diff = Math.abs(totalFreeTime-epDuration);
    if(totalFreeTime>=epDuration){
        console.log (`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`)
    }


}
lunchBreak(["Teen Wolf",
"48",
"60"])

