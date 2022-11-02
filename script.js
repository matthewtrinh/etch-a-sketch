let color = document.querySelector(`#colorPicker`).getAttribute(`value`);

const colorPicker = document.querySelector(`#colorPicker`);
colorPicker.addEventListener('input', event => {
    color = event.target.value;
}, false);

const slider = document.querySelector(`#sizeSlider`);
slider.addEventListener('input', event => {
    const size = event.target.value;
    slider.setAttribute(`value`, size);
    dimensions.textContent = `${slider.getAttribute('value')} x ${slider.getAttribute('value')}`;
    newGrid();
});

const dimensions = document.createElement(`div`);
dimensions.setAttribute(`id`, `dimensions`);
dimensions.textContent = `${slider.getAttribute('value')} x ${slider.getAttribute('value')}`;

document.querySelector(`#slider`).insertBefore(dimensions,slider);

createGrid(slider.getAttribute(`value`));

const btn = document.querySelector(`button`);
btn.addEventListener('click', newGrid);

function newGrid() {
    const size = slider.getAttribute(`value`);
    deleteGrid();
    createGrid(size);
}

function deleteGrid() {
    const rows = document.querySelectorAll('.row');
    const grid = document.querySelector(`#grid`);

    rows.forEach( row => grid.removeChild(row) );
}

function createGrid(size) {
    for(let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for(let j = 0; j < size; j++) {
        const square = document.createElement('div');
        square.classList.add('square');

        row.appendChild(square);
    }

    const grid = document.querySelector(`#grid`);
    grid.appendChild(row);
    }
    colorSquares();
}


function colorSquares() {
    const squares = document.querySelectorAll('.square');
    squares.forEach( square => square.addEventListener('mouseover', changeColor) );
}

function changeColor() {
    this.style.backgroundColor = color;
}