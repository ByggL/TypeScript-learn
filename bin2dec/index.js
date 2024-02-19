"use strict";
function submitted(e) {
    console.log("submit !");
    e.preventDefault();
    let binaryField = document.getElementById("binary");
    let decimalField = document.getElementById("decimal");
    if (binaryField.value.match(/^[0-1]+$/g) === null) {
        decimalField.innerText = "Error : input is not binary";
        return;
    }
    let reversedBinaryText = binaryField.value.split('').map(Number).reverse();
    console.log(reversedBinaryText);
    let result = 0;
    for (let i = 0; i < reversedBinaryText.length; i++) {
        result += reversedBinaryText[i] * Math.pow(2, i);
    }
    // const result = reversedBinaryText.reduce(
    //   (accumulator, currentValue, idx) =>
    //     accumulator + parseInt(currentValue) * Math.pow(2, idx)
    // );
    console.log(result);
    decimalField.innerText = result.toString();
}
window.onload = function () {
    var form = document.getElementById("mainForm");
    form.onsubmit = submitted.bind(form);
};
