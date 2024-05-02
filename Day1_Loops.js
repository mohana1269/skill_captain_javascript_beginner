function printMultiples(number) {
    // Check if the number is negative or zero
    if (number <= 0) {
        console.log("Error: Please provide a positive non-zero number.");
        return;
    }

    // Print the first 10 multiples of the given number
    console.log(`The first 10 multiples of ${number} are:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
printMultiples(5);
