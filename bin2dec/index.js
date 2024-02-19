"use strict";
var _a;
(_a = document.getElementById("mainForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
    e.preventDefault();
    let binaryField = document.getElementById("binary");
    let decimalField = document.getElementById("decimal");
    if (binaryField.innerText.match(/^[0-1]+$/g) === null) {
        Error('Enter either 0 or 1');
        return;
    }
    const reversedBinaryText = binaryField.innerText
        .split('')
        .map(Number) // Convert to a number from string
        .reverse();
    const result = reversedBinaryText.reduce((accumulator, currentValue, idx) => accumulator + currentValue * Math.pow(2, idx));
    decimalField.innerText = result.toString();
});
