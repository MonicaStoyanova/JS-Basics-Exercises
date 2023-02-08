function sequence(input) {

    let n = Number(input[0]);

    let a = 1;

    while (n >= a) {
        console.log(a);
        a = a * 2 + 1;
    }

}
sequence(["8"])