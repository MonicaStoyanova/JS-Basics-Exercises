function reading(input){
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number (input[1]);
    let Days = Number(input[2]);

    let totalHoursOfReading = numberOfPages / pagesPerHour;
    let perDayReading = totalHoursOfReading / 2;

    console.log(perDayReading);

}
reading(["212 ","20 ","2 "])
