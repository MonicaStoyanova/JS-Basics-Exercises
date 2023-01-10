function minNumber(input){

    let inputElement = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER

    while (inputElement !== "Stop") {
        let currentNumber = Number(inputElement);

        if(currentNumber<min){
            min = currentNumber;
        }
        inputElement= input[index];
        index++;
        
    }
    console.log(min);
}
minNumber(["-10",
"20",
"-30",
"Stop"])

