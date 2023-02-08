function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let timeExam = examHour * 60 + examMin;
    let timeArrive = arriveHour * 60 + arriveMin;
    let diff = Math.abs(timeArrive - timeExam);

    if (timeExam < timeArrive) {
        console.log("Late");
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (diff >= 60) {

            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    } else if (timeArrive === timeExam || timeExam - timeArrive <= 30) {
        console.log("On time");
        if (diff > 0) {
            let m = diff % 60;
            console.log(` ${m} minutes before the start`);
        }
    } else {
        console.log("Early");
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else {
            console.log(`${m} minutes before the start`);
        }
    }
}
onTimeForTheExam(["9",
    "00",
    "8",
    "30"
])
