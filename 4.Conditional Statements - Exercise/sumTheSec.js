function sec(input){
    let firstPlayer = Number(input[0]);
    let secondPlayer = Number(input[1]);
    let thirdPlayer = Number(input[2]);

    let totalTime = firstPlayer+secondPlayer+thirdPlayer;
    let totalTimeInMinutes = Math.floor(totalTime/60);
    let totalTimeInSeconds = totalTime%60;

    if (totalTimeInSeconds<10){
        console.log(`${totalTimeInMinutes}:0${totalTimeInSeconds}`);
    }else{(totalTimeInSeconds>10)
        console.log(`${totalTimeInMinutes}:${totalTimeInSeconds}`);
    }

    
}
sec(["14", "12",
"10"])

