const body = document.querySelector('body');

const colorMeaning = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', e => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorMeaning.textContent = randomColor;
})
