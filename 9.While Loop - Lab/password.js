function password(input){
    

    let name = input[0];
    
    let pass = input[1];
    
    let pass2 = input[2];
    let index = 3;

    while(pass2 !== pass){
        pass2 = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);

    

}
password(["Gosho",
"secret",
"secret"])

