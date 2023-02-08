function area(input) {

    let figure = input[0];

    if (figure === "square") {
        let lenght = Number(input[1]);
        let area = lenght * lenght;

        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {

        let sideOne = Number(input[1]);
        let sideTwo = Number(input[2]);
        let area = sideOne * sideTwo;

        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input[1]);
        let area = Math.PI * r * r;

        console.log(area.toFixed(3));

    } else if (figure === "triangle") {
        let firstSide = Number(input[1]);
        let hight = Number(input[2]);
        let area = (firstSide * hight) / 2;


        console.log(area.toFixed(3));
    }

}
area(["triangle",
    "4.5",
    "20"
])