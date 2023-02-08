function solve(input){
    let n = Number(input[0]);
    let buff = "";

    for(let i = 1111; i<= 9999; i++){
        let iToString = i + "";
        let a = Number(iToString[0]);
        let b = Number(iToString[1]);
        let c = Number(iToString[2]);
        let d = Number(iToString[3]);

        if(n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0){
            buff = `${a}${b}${c}${d} `;
        }
        
    }
    console.log(buff);
    

}
solve(["11"])