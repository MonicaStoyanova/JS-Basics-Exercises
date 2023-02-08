function oldBooks(input) {

    let searchedBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let allOtherBooks = input[index];

    while(allOtherBooks !== "No More Books"){
        if(allOtherBooks === searchedBook){
            bookIsFound = true;
            break;
        }
        index++;
        allOtherBooks = input[index];
    }
    if(bookIsFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index-1} books.`);
    }else{
        console.log(`You checked ${index-1} books and found it.`);
    }
  
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

