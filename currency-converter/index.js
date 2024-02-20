"use strict";
var currencyList = [
    {
        name: "Euro",
        symbol: "€",
        value: 1,
    },
    {
        name: "Dollar",
        symbol: "$",
        value: 1.08,
    },
    {
        name: "Pound Sterling",
        symbol: "£",
        value: 0.85,
    },
    {
        name: "Ruble",
        symbol: "₽",
        value: 99.17,
    },
    {
        name: "Rupee",
        symbol: "₹",
        value: 89.61,
    },
    {
        name: "Yuan",
        symbol: "¥",
        value: 7.77,
    },
    {
        name: "Yen",
        symbol: "¥",
        value: 162,
    },
];
function update(e) {
    e.preventDefault();
    let inputField = document.getElementById("input");
    let resultField = document.getElementById("result");
    let currencyInField = document.getElementById("currencyIn");
    let currencyOutField = document.getElementById("currencyOut");
    let currencyIn = currencyList.find(i => i.name === currencyInField.value);
    let currencyOut = currencyList.find(i => i.name === currencyOutField.value);
    let result = parseInt(inputField.value) / currencyIn.value; // first we convert the input to Euro
    result *= currencyOut.value; // then we convert from Euro to the final currency
    resultField.innerText = result + " " + currencyOut.name + " (" + currencyOut.symbol + ")"; // result
}
window.onload = function () {
    var form = document.getElementById("mainForm");
    // form.onsubmit = submitted.bind(form);
    form.onchange = update.bind(form);
};
