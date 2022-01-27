"use strict";

// Caching the DOM
const sketchbox = document.querySelector(".sketchbox");
const grid = document.querySelector(".grid");
const resizeBtn = document.querySelector(".resize-mode");
const rainBowBtn = document.querySelector(".rainbow-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");

// DEFAULT SETTINGS
let size = 16;
let defaultColor = "black";

// Function that takes size (rows * columns) and makes a grid
function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        //Creates new div elements
        const div = document.createElement('div');
        sketchbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        sketchbox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        //Adding the new divs to the sketchbox container
        sketchbox.appendChild(div).classList.add('grid');
    }
}

// Default size
createGrid(size); 

const resetGrid = function () {
    let gridBox = document.querySelectorAll(".grid");
    gridBox.forEach(grid => grid.remove());
}

// Resize Sketchbox button
resizeBtn.addEventListener("click", function() {
    let input = prompt("Please enter new dimensions of sketchbox");
        if (input > 0 && input <= 100 && input != null) {
        // Function to resize the sketch box
        resetGrid();
        createGrid(input);
        RainBowLogic();
    } else {
        let input_2 = prompt("Please enter a number between 1 and 100");
        resetGrid();
        createGrid(input_2);
        RainBowLogic();
    }
  })

const RainBowLogic = function() {
    if (rainBowBtn.textContent === "Rainbow Mode On") {
        rainBowMode();
    } else {
        blackMode();
    }
}

// Hovering mouse will change color of div to BLACK
const blackMode = function() {
    // selecting all of the individual grid elements
    let gridBox = document.querySelectorAll(".grid");
    gridBox.forEach((grid) => {
        grid.addEventListener("mouseover", (e) => {
            grid.style.background = defaultColor;
        })
    })
}
blackMode();

// Rainbow button
rainBowBtn.addEventListener("click", (e) => {
    if (rainBowBtn.textContent === "Rainbow Mode Off") {
        rainBowBtn.textContent = "Rainbow Mode On";
        eraserBtn.textContent = "Eraser Off";
        rainBowMode();
    } else {
        rainBowBtn.textContent = "Rainbow Mode Off";
        eraserBtn.textContent = "Eraser Off";
        blackMode();
    }
})

// Function for rainbow mode
const rainBowMode = function() {
    let gridBox = document.querySelectorAll(".grid");
    gridBox.forEach((grid) => {
        grid.addEventListener("mouseover", (e) => {
            let R = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            grid.style.background = `rgb(${R},${B},${G})`
        })
    })
}

// Toggles the active class on and off (removes black to erase)
const eraseGrid = function() {
    let gridBox = document.querySelectorAll(".grid");
    gridBox.forEach((grid) => {
        grid.addEventListener("mouseover", (e) => {
            grid.style.background = "rgb(230, 230, 230)";
        })
    })
}

// Erase button button
eraserBtn.addEventListener("click", (e) => {
    // Enable Eraser
    if (eraserBtn.textContent === "Eraser Off") {
        eraserBtn.textContent = "Eraser On";
        eraseGrid();
    // Disable Eraser and enable color button mode
    } else {
        if (rainBowBtn.textContent === "Rainbow Mode Off") {
            blackMode();
            eraserBtn.textContent = "Eraser Off";
        } else {
            rainBowMode();
            eraserBtn.textContent = "Eraser Off";
        }
    }})

// Clear Function
const clearGrid = function() {
    let gridBox = document.querySelectorAll(".grid");
    gridBox.forEach((grid) => {
        grid.style.background = "rgb(230, 230, 230)";
    })
}

// Clicking Clear Button 
clearBtn.addEventListener("click", clearGrid);

/* ------  PROJECT NOTES / LESSONS LEARNT ------ */

// 1. Was stuck on the Eraser button functionality/toggle feature because I initially used = first in my if statement and = is only used for assigning values eg. let zero = 0; whereas I was meant to use === for comparisons

// 2. Manually adding inline styles for DOM Manipulation rather than toggling classes seems to make if else functions less confusing

// 3. When running functions which reset the conditions of the game or page, always consider the initial functions running and whether you need to rerun them to "reset the page"

