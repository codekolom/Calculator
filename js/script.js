let display = document.getElementById('display');
let memory = 0;

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    // eval() diye string theke math kora hoy

    display.value = eval(display.value);
  } catch (err) {
    display.value = 'Error';
  }
}

function allClear() {
  display.value = '';
}

function clearEntry() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function sqrt() {
  if (display.value) {
    display.value = Math.sqrt(eval(display.value));
  }
}

function percent() {
  if (display.value) {
    display.value = eval(display.value) / 100;
  }
}

// Memory Functions
function memoryPlus() {
  if (display.value) {
    memory += Number(eval(display.value));
    display.value = ''; // Memory-te pathiye screen khali kora
  }
}

function memoryMinus() {
  if (display.value) {
    memory -= Number(eval(display.value));
    display.value = '';
  }
}

function memoryRecall() {
  display.value = memory;
}
