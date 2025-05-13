let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  if (currentInput === '0' && num !== '.') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  if (/[+\-*/]$/.test(currentInput)) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('0');
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (e) {
    updateDisplay('Error');
    currentInput = '';
  }
}

function updateDisplay(value) {
  display.textContent = value || currentInput || '0';
}
