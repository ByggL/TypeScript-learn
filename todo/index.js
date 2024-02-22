"use strict";
var todoList = [];
function submitted(e) {
    e.preventDefault();
    // It's necessary to put every used DOM element inside a variable so the type can be fixed 
    let inputField = document.getElementById("input");
    let resultField = document.getElementById("list");
    let newElement = inputField.value;
    resultField.appendChild(newListElement(newElement));
}
window.onload = function () {
    var form = document.getElementById("mainForm");
    // form.onsubmit = submitted.bind(form);
    form.onsubmit = submitted.bind(form);
};
function newListElement(text) {
    let element = document.createElement("li");
    let x = document.createElement("input");
    x.setAttribute("type", "checkbox");
    let txt = document.createElement("p");
    txt.innerText = text;
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    element.appendChild(x);
    element.appendChild(txt);
    element.appendChild(btn);
    return element;
}
