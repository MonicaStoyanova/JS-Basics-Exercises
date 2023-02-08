function trekkingMania(input) {
 
    let index = 0;
 
    let n = Number(input[index]);
    index++;
 
    let people1 = 0;
    let people2 = 0;
    let people3 = 0;
    let people4 = 0;
    let people5 = 0;
 
 
    for (i = 1; i <= n; i++) {
        let People = Number(input[index]);
        index++;
        if (People <= 5) {
            people1 += People;
        } else if (People >= 6 && People <= 12) {
            people2 += People;
        } else if (People >= 13 && People <= 25) {
            people3 += People;
        } else if (People >= 26 && People <= 40) {
            people4 += People;
        } else {
            people5 += People;
        }
    }
 
    let allPeople = people1 + people2 + people3 + people4 + people5;
 
    part1 = people1 / allPeople * 100;
    part2 = people2 / allPeople * 100;
    part3 = people3 / allPeople * 100;
    part4 = people4 / allPeople * 100;
    part5 = people5 / allPeople * 100;
 
    console.log(`${part1.toFixed(2)}%`);
    console.log(`${part2.toFixed(2)}%`);
    console.log(`${part3.toFixed(2)}%`);
    console.log(`${part4.toFixed(2)}%`);
    console.log(`${part5.toFixed(2)}%`);
 
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
