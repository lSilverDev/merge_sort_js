const listBooks = require("./bookstore");

function mergeSort(listBooks){
    if(listBooks.length > 1){
        const middle = Math.floor(listBooks.length/2);
        const partOne = mergeSort(listBooks.slice(0, middle));
        const partTwo = mergeSort(listBooks.slice(middle, listBooks.lenght));

        listBooks = order(partOne, partTwo);
    }

    return listBooks;
}

function order(partOne, partTwo){
    let currentPartOne = 0;
    let currentPartTwo = 0;
    const result = [];

    while(currentPartOne < partOne.length && currentPartTwo < partTwo.length){
        let currentProductPartOne = partOne[currentPartOne];
        let currentProductPartTwo = partTwo[currentPartTwo];

        if(currentProductPartOne.price < currentProductPartTwo.price){
            result.push(currentProductPartOne);
            currentPartOne++;
        }
        else{
            result.push(currentProductPartTwo);
            currentPartTwo++;
        }
    }

    return result.concat(currentPartOne < partOne.length 
        ? partOne.slice(currentPartOne) 
        : partTwo.slice(currentPartTwo)
    );
}

console.log(mergeSort(listBooks));