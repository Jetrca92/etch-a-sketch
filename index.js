const row = document.createElement('div');
row.setAttribute('class', 'row');

const grid = document.createElement('div');
grid.setAttribute('class', 'grid');

const container = document.querySelector('#grid-container');
generateGrid(16);
const btn = document.querySelector('#btn');

function generateGrid(gridSize) {
    container.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let i = 0; i < gridSize; i++) {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            row.appendChild(grid);
        }
    }
}

btn.onclick = () => {
    let gridSize = prompt('Grid size (if input 10, grid size 10x10)?');
    gridSize = parseInt(gridSize);
    if (gridSize > 100) {
        alert('Grid size must be under 100!');
    }
    generateGrid(gridSize);
}



