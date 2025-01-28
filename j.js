const resultField = document.getElementById('result');

let currentInput = '';
let operator = '';
let previousInput = '';

function appendValue(value) {
  currentInput += value;
  updateDisplay();
}

function updateDisplay() {
  resultField.value = currentInput || '0';
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  if (!previousInput || !currentInput || !operator) return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
    default:
      return;
  }

  currentInput = result.toString();
  previousInput = '';
  operator = '';
  updateDisplay();
}
