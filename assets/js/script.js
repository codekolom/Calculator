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
    event.preventDefault(); // ব্রাউজার ডিফল্ট কাজ বন্ধ রাখতে
    calculate();
    buttonText = '=';
  } else if (key === 'Backspace') {
    backspace();
    buttonText = '←';
  } else if (key === 'Escape') {
    allClear();
    buttonText = 'AC';
  }

  // বাটন খুঁজে বের করা এবং ইফেক্ট দেওয়া
  if (buttonText) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      if (btn.innerText === buttonText) {
        activateButton(btn);
      }
    });
  }
});

// বাটন এনিমেশন এবং সাউন্ড ফাংশন
function activateButton(btn) {
  // সাউন্ড প্লে করা
  if (clickSound) {
    clickSound.currentTime = 0; // আগের সাউন্ড শেষ না হলেও আবার বাজবে
    clickSound.play().catch(e => console.log('Sound play error:', e));
  }

  // কালার পরিবর্তন (CSS ক্লাস যোগ)
  btn.classList.add('active-key');

  // ১০০ মিলি-সেকেন্ড পর সরিয়ে ফেলা
  setTimeout(() => {
    btn.classList.remove('active-key');
  }, 100);
}
