const canvas = document.getElementById('canvas');
const canvasDivs = document.getElementById('canvas').childNodes;
const resetButton = document.getElementById('lh-button');
const displayGridButton = document.getElementById('rh-button');
const gridSizeInput = document.getElementById('grid-size-input');
const hueRedBox = document.getElementById('hue-number-red');
const hueBlueBox = document.getElementById('hue-number-blue');
const hueGreenBox = document.getElementById('hue-number-green');
const hueRedSlider = document.getElementById('slider-red');
const hueBlueSlider = document.getElementById('slider-blue');
const hueGreenSlider = document.getElementById('slider-green');
    
function createCanvasGrid(gridSize) {
    gridSize = gridSizeInput.value;

    if (canvas.hasChildNodes()) {
        canvas.textContent = ''
        
    }
    canvas.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    canvas.style.gridTemplateRows = `repeat(${gridSize}, auto`;
        for (i = 0; i < gridSize*gridSize; i++) {
            createDivElements(i)
        }
        canvasDivs.forEach(div => div.addEventListener('mouseover', changeColor));
}

function createDivElements(id) {
    let createCanvasDivs = document.createElement('div');
    createCanvasDivs.setAttribute('id', id)
    createCanvasDivs.className = 'canvas-divs';
    canvas.appendChild(createCanvasDivs);
}
function changeColor() {
    this.style.backgroundColor = `rgb(${hueRedSlider.value}, ${hueBlueSlider.value}, ${hueGreenSlider.value})`;
}
function changeRGBBackground() {
    hueRedBox.style.backgroundColor = `rgb(${hueRedSlider.value}, ${hueBlueSlider.value}, ${hueGreenSlider.value})`;
    hueBlueBox.style.backgroundColor = `rgb(${hueRedSlider.value}, ${hueBlueSlider.value}, ${hueGreenSlider.value})`;
    hueGreenBox.style.backgroundColor = `rgb(${hueRedSlider.value}, ${hueBlueSlider.value}, ${hueGreenSlider.value})`;
}
function changeRGBValue() {
    hueRedBox.value = hueRedSlider.value;
    hueBlueBox.value = hueBlueSlider.value;
    hueGreenBox.value = hueGreenSlider.value;
    changeRGBBackground();
}
function displayGrid() {
    canvasDivs.forEach(div => {
        if(div.style.borderLeft === '') {
            div.style.borderTop = 'solid 1px rgba(50,50,50, 0.1)';
            div.style.borderLeft = 'solid 1px rgba(50,50,50, 0.1)';
        } else {
            div.style.borderTop = '';
            div.style.borderLeft = ''; 
        }
    })
}

resetButton.addEventListener('click', createCanvasGrid);
hueBlueSlider.addEventListener('mouseup', changeRGBValue);
hueGreenSlider.addEventListener('mouseup', changeRGBValue);
hueRedSlider.addEventListener('mouseup', changeRGBValue);
displayGridButton.addEventListener('click', displayGrid);

createCanvasGrid(16);