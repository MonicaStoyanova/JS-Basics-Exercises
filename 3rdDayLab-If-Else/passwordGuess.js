function password(input){

    let guess = (input[0]);

    if(guess ==="s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }

}
password(["s3cr3t!P@ssw0rd"])