let display = document.getElementById('display');
let memory = 0;
const clickSound = document.getElementById('click-sound');

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    if (display.value) {
      display.value = eval(display.value);
    }
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
    display.value = '';
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

// --- Keyboard Support with Sound & Effect ---
document.addEventListener('keydown', function (event) {
  const key = event.key;
  let buttonText = '';

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    press(key);
    buttonText = key;
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
    buttonText = '=';
  } else if (key === 'Backspace') {
    backspace();
    buttonText = '←';
  } else if (key === 'Escape') {
    allClear();
    buttonText = 'AC';
  }

  if (buttonText) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      if (btn.innerText === buttonText) {
        activateButton(btn);
      }
    });
  }
});

function activateButton(btn) {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log('Sound play error:', e));
  }

  btn.classList.add('active-key');

  setTimeout(() => {
    btn.classList.remove('active-key');
  }, 100);
}
