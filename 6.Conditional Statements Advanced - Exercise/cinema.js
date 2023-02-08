function cinema(input){

    let type = input[0];
    let rows = Number(input[1]);
    let collums = Number(input[2]);
    
    let income = 0;

    if(type =="Premiere"){
        income = rows*collums*12;
    }else if (type == "Normal"){
        income = rows * collums * 7.5;
    
    }else if(type == "Discount"){
        income = rows * collums * 5;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])


