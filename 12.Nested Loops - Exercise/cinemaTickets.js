function cinemaTickets(input) {
    let index = 0;
    let command= input[index++];
     
    let studentsCount = 0;
    let standardCount = 0;
    let kidsCount = 0;
     
    while (command !== "Finish") {
    let movieName = command;
    let freeSpace = Number(input[index++]);
    let tempCommand = input[index++];
    let soldTicked = 0;
    while (tempCommand !== "End") {
        let tickedType = tempCommand;
        soldTicked++;
     
        switch (tickedType) {
            case "student": studentsCount++; break;
            case "standard": standardCount++; break;
            case "kid": kidsCount++; break;
        }
        if (freeSpace <= soldTicked) {
            break;
        }
        tempCommand = input[index++]
    }
    let totalSpace = soldTicked / freeSpace * 100;
    console.log(`${movieName} - ${totalSpace.toFixed(2)}% full.`);
     
    command = input[index++];
    }
    let totalTicked = standardCount + studentsCount + kidsCount;
    let studentP = studentsCount / totalTicked * 100;
    let standardP = standardCount / totalTicked * 100;
    let kidP = kidsCount / totalTicked * 100;
    console.log(`Total tickets: ${totalTicked}`);
    console.log(`${studentP.toFixed(2)}% student tickets.`);
    console.log(`${standardP.toFixed(2)}% standard tickets.`);
    console.log(`${kidP.toFixed(2)}% kids tickets.`);
     
    }
    cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
    