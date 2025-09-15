const container = document.getElementById("scetchGridContainer");

function createScetchGrid(size) {
    container.innerHTML = "";
    const gridSize = size*size;
    for(let i = 0; i < gridSize; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell)
    }

    const cellWidth = 'calc(100% / ${size} - 2px)';
    container.querySelectorAll(".cell").forEach(element => {
        element.style.flexBasis = cellWidth;
    });
}

createScetchGrid(16);