function fishTank(input){

    let lenght = Number(input[0]);
    let wide = Number(input[1]);
    let hight = Number(input[2]);
    let percentage = Number(input[3]);

    let obemCM = lenght * wide * hight;
    let obemLtr = obemCM/1000;
    let neededLtr = obemLtr*(1-percentage/100);

    console.log(neededLtr);

}
fishTank(["85","75","47","17"])