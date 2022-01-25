"use strict";

// Caching the DOM
const sketchbox = document.querySelector(".sketchbox");
const grid = document.querySelector(".grid");
const resizeBtn = document.querySelector(".resize-mode");
const rainBowBtn = document.querySelector(".rainbow-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");

// Function that takes input (rows * columns) and makes a grid
function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        sketchbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        sketchbox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        sketchbox.appendChild(div).classList.add('grid');
    }
}

createGrid(16); 

// Hovering mouse will change color of div to black

// selecting all of the individual grid elements
let gridBox = document.querySelectorAll(".grid");
gridBox.forEach((grid) => {
    grid.addEventListener("mouseover", (e) => {
        grid.classList.add("active");
    })
})

// Remove active grid function
const clearGrid = function() {
    gridBox.forEach((grid) => {
        grid.classList.remove("active");
    })
}

// Clear button functionality
clearBtn.addEventListener("click", (e) => {
        clearGrid();
})

// Erase button functionality
eraserBtn.addEventListener("click", (e) => {
    // Enable Eraser
    if (eraserBtn.textContent === "Eraser Off") {
        eraserBtn.textContent = "Eraser On";
    // Disable Eraser
    } else {
        eraserBtn.textContent = "Eraser Off";
    }
    eraseGrid();
})

// Toggles the active class on and off (removes black)
const eraseGrid = function() {
    let gridBox = document.querySelectorAll(".grid");
    gridBox.forEach((grid) => {
        grid.addEventListener("mouseover", (e) => {
            grid.classList.toggle("active");
        })
    })
}





/* ----- PROJECT NOTES/ LESSONS LEARNT 

1. Was stuck on the Eraser button functionality/toggle feature because I initially used = first in my if statement and = is only used for assigning values eg. let zero = 0; whereas I was meant to use === for comparisons


----- */
