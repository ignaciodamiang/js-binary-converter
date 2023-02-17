let binaryNumber = parseInt(binaryNumberInput.value, 2); // convert binary number to decimal
let shiftedNumber = binaryNumber << 1; // perform left shift by 1 bit
binaryNumberInput.value = shiftedNumber.toString(2); // convert back to binary and display
