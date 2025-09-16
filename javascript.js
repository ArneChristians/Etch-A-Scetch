const container = document.getElementById("scetchGridContainer");

function createScetchGrid(size) {
    container.innerHTML = "";
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-columns', size);
    const gridSize = size*size;
    for(let i = 0; i < gridSize; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell)
    }

}

createScetchGrid(16);