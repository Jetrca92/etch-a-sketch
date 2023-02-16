// Create elements for grid
const row = document.createElement('div');
row.setAttribute('class', 'row');

const grid = document.createElement('div');
grid.setAttribute('class', 'grid');

const container = document.querySelector('#grid-container');
generateGrid(16);
const btn = document.querySelector('#btn');

// Function for grid size change
function generateGrid(gridSize) {
    container.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let i = 0; i < gridSize; i++) {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            grid.style.width = parseFloat(720 / gridSize) + "px";
            grid.style.height = parseFloat(720 / gridSize) + "px";
            row.appendChild(grid);
        }
    }
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.classList.add('hover');
        });
    });
}

// When button clicked, load gridSize fnct
btn.onclick = () => {
    let gridSize = prompt('Grid size (if input 10, grid size 10x10)?');
    gridSize = parseInt(gridSize);
    if (gridSize > 100) {
        alert('Grid size must be 100 or less!');
        return;
    }
    generateGrid(gridSize);
}

 // Add a pen-like trace to mouse pointer
const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.classList.add('hover');
    });
});





