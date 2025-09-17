const container = document.getElementById("scetchGridContainer");
const cellItem = document.getElementsByClassName("cell");
const blackPen = document.getElementById("blackPen");
const eraserTool = document.getElementById("eraser");
const grid = document.getElementById("showGrid");
const reset = document.getElementById("reset");

let gridState = 'grid';

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


//Mouse over effect
container.addEventListener("mouseover", e => {
    if (e.target.classList.contains("cell") && e.target.style.backgroundColor != "black") {
        e.target.style.backgroundColor = "lightgrey";
    }
})

container.addEventListener("mouseout", e => {
    if (e.target.classList.contains("cell") && e.target.style.backgroundColor == "lightgrey") {
        e.target.style.backgroundColor = "white";
    }
})

//Pen Effekt
blackPen.addEventListener("click", event => {
    container.addEventListener("click", e => {
        if (e.target.classList.contains("cell")) {
            e.target.style.backgroundColor = "black";
        }
    })
})

eraserTool.addEventListener("click", event => {
    container.addEventListener("click", e => {
        if (e.target.classList.contains("cell")) {
            e.target.style.backgroundColor = "white";
        }
    })
})

//Grid toggle function
grid.addEventListener("click", event => {
    if (gridState == 'grid') {
        const cells = document.querySelectorAll(".cell");
        gridState = 'noGrid';
        cells.forEach(cell => {
            cell.style.border = "none";
        });
    } else {
        const cells = document.querySelectorAll(".cell");
        gridState = 'grid';
        cells.forEach(cell => {
            cell.style.border = "1px solid tomato";
        });
    }

})

reset.addEventListener("click", event => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
            cell.style.backgroundColor = "white";
        });
})