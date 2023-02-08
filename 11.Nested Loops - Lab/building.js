function building(input) {

    let floorsInTheBuilding = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for (let e = floorsInTheBuilding; e >= 1; e--) {
        let buff = ""
        for (let room = 0; room < roomsPerFloor; room++) {

            if (floorsInTheBuilding === e) {
                buff += `L${e}${room} `;


            } else if (e % 2 === 0) {
                buff += `O${e}${room} `;


            } else {
                buff += `A${e}${room} `;
            }
        }
        console.log(buff);
    }

}
building(["6", "4"])