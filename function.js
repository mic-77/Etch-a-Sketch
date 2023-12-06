const GRIDSIZE = 600;
const gridSizeInput = document.getElementById("grid-size-input");
let squaresPerSide;
const gridContainer = document.getElementById("grid-container");
const createGridbtn = document.getElementById("btnForCreateGrid");

// SLIDER - maybe wait for tutorial part 2
// const sliderContainer = document.getElementById("slider-container");
// const silder = document.querySelector(".slider");
// const silderValue = document.getElementById("sider-value");
//silderValue.textContent = `${silder.value} x ${silder.value} (Resolution)`;

gridContainer.style.width = gridContainer.style.height = `${GRIDSIZE}px`;

function setBGC() {
  function getRandomRGBValue() {
    return Math.floor(Math.random() * 256);
  }

  function randomizeRGB() {
    const red = getRandomRGBValue();
    const green = getRandomRGBValue();
    const blue = getRandomRGBValue();
    return `rgb(${red}, ${green}, ${blue})`;
  }
  const randomColour = randomizeRGB();
  this.style.backgroundColor = randomColour;
}

function createGridCells(squaresPerSide) {
  removeGridCells();
  squaresPerSide = gridSizeInput.value;
  const numbersOfSquare = squaresPerSide * squaresPerSide;
  const widthOrHeight = `${GRIDSIZE / squaresPerSide - 2}px`;
  for (let i = 0; i < numbersOfSquare; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");
    gridContainer.appendChild(gridCell);
    gridCell.addEventListener("mouseover", setBGC);
  }
}

createGridbtn.addEventListener("click", createGridCells);

function removeGridCells() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
