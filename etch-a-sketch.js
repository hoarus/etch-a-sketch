const container = document.querySelector(".container");
const clearGridButton = document.querySelector(".clear-grid");
let iterations = 16;
generateGrid();



function generateGrid(){
    for( i = 1; i <= iterations; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.setAttribute("id", ("column" + i));
        container.appendChild(column);
        for (j = 1; j <= iterations; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", ("square" + i + "-" + j));
            column.appendChild(square);
        }
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
    square.addEventListener("mouseover", addHover)
});
}


function addHover() {
    this.classList.add('hover');
}

clearGridButton.addEventListener("click", clearGrid);

function clearGrid() {
    container.textContent = "";
    do {
        iterations = parseInt(prompt("What size would you like the grid to be? (Max of 64)"));
    }
    while ((isNaN(iterations) || iterations <1 || iterations > 64) )
    
    generateGrid();
}

