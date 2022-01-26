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
        const div = document.createElement('div');
        sketchbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        sketchbox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        sketchbox.appendChild(div).classList.add('grid');
    }
}

// Default size
createGrid(size); 

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
        rainBowMode();
    } else {
        rainBowBtn.textContent = "Rainbow Mode Off";
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
            grid.classList.toggle("active");
        })
    })
}

// Erase button button
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

// Clear Function
const clearGrid = function() {
    let gridBox = document.querySelectorAll(".grid");
    gridBox.forEach((grid) => {
        grid.classList.remove("active");
    })
}

// Clicking Clear Button 
clearBtn.addEventListener("click", clearGrid);







// PROJECT NOTES/ LESSONS LEARNT 

// 1. Was stuck on the Eraser button functionality/toggle feature because I initially used = first in my if statement and = is only used for assigning values eg. let zero = 0; whereas I was meant to use === for comparisons

