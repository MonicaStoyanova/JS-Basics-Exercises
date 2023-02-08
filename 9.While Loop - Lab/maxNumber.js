function maxNumber(input){

    let inputElement = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let currentNumber = Number(inputElement);

        if(currentNumber>max){
            max = currentNumber;
        }
        inputElement= input[index];
        index++;
        
    }
    console.log(max);

}
maxNumber(["45",
"-20",
"7",
"99",
"Stop"])

