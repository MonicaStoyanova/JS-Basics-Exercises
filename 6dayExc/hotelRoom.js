function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);


    let studio = 0;
    let apartment = 0;
    let totalStudio = 0;
    let totalApartment = 0;
    let discountApartment = 0;
    let discountStudio = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            apartment = 65;
            break;
        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70;
            break;
        case "July":
        case "August":
            studio = 76;
            apartment = 77;
            break;

    }

    if (nights > 7 && nights <= 14) {
        if (month == "May" || month == "October") {
            discountStudio = studio * 0.05;
        }
    } else if (nights > 14) {
        if (month == "May" || month == "October") {
            discountStudio = studio * 0.30;
        } else if (month == "June" || month == "September") {
            discountStudio = studio * 0.2;
        }
    } 
    

    if (nights > 14) {
        discountApartment = apartment * 0.10;
    }
    totalStudio =  (studio - discountStudio) * nights;
    totalApartment =  nights * (apartment-discountApartment);

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);

}
hotelRoom(["June",
"14"])


