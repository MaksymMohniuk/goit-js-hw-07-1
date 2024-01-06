
const boxPlace = document.getElementById('boxes');
const boxInput = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


boxInput.addEventListener('input', checkNumber);

let amount;

function checkNumber() {
  if(boxInput.value >= 1 && boxInput.value <= 100) {
    amount = boxInput.value;
  } else {
    alert('Please enter a number between 1 and 100');
  }
}

createBtn.addEventListener('click', function() {
  boxPlace.innerHTML = '';
  createBoxes(amount);
  boxInput.value = '';
});


function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxPlace.appendChild(box);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxPlace.innerHTML = '';
}