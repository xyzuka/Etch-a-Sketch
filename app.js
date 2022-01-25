"use strict";

// Caching variables
const sketchbox = document.querySelector(".sketchbox");
const grid = document.querySelector(".grid");
const colorBtn = document.querySelector(".color-mode");
const rainBowBtn = document.querySelector(".rainbow-mode");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");

// Function that takes input (rows * columns) and makes a grid
function createGrid(col, row) {
    for (let i = 0; i < (col * row); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid red';
        sketchbox.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        sketchbox.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        sketchbox.appendChild(div).classList.add('grid');
    }
}

createGrid(20, 20); 