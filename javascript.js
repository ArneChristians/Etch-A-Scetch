const container = document.getElementById("scetchGridContainer");
const cellItem = document.getElementsByClassName("cell");
const blackPen = document.getElementById("blackPen");
const eraserTool = document.getElementById("eraser");

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
