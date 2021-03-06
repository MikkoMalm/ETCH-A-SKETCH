
//create a few variables
const container = document.getElementsByClassName("gridContainer")[0];
let color = "#F8F9F9"

//create the grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "gridItem";
    };
  };

//changes the color on button-click
function changeColor(col) {
    if (col == "black") {
        color = "#000000";
    }
    if (col == "red") {
        color = "#ff0000";
    }
    if (col == "blue") {
        color = "#0000ff";
    }
    if (col == "green") {
        color = "#008000";
    }
    return color;
}

function main() {
    makeRows(44, 64);
    document.addEventListener("click", function (e) {
        if (e.target.className == "black" || e.target.className == "red" || e.target.className == "blue" || e.target.className == "green") {
            changeColor(e.target.className);
        }
    });
    document.addEventListener("mouseover", function (e) {
        if (e.target.className == "gridItem") {
            e.target.style.backgroundColor = color
        };
    });
}

main();