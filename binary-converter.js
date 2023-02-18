const decimalNumberInput = document.getElementById('decimalNumberInput');
const binaryNumberInput = document.getElementById('binaryNumberInput');

decimalNumberInput.addEventListener('input', () => {
  const decimalNumber = parseInt(decimalNumberInput.value);
  const binaryNumber = decimalNumber.toString(2);
  binaryNumberInput.value = binaryNumber;
});

binaryNumberInput.addEventListener('input', () => {
  const binaryNumber = binaryNumberInput.value;
  const decimalNumber = parseInt(binaryNumber, 2);
  decimalNumberInput.value = decimalNumber;
});
