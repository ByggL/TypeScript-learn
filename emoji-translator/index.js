"use strict";
var emojiList = [
    {
        emoji: "😀",
        word: "smile",
    },
    {
        emoji: "😄",
        word: "happy",
    },
    {
        emoji: "💀",
        word: "skull",
    },
    {
        emoji: "💩",
        word: "poop",
    }, // add the whole emoji galore
];
function updated(e) {
    e.preventDefault();
    let inputField = document.getElementById("input");
    let outputField = document.getElementById("output");
    let inputWord = inputField.value.split(" ");
    let result = "";
    inputWord.forEach((element) => {
        let s = emojiList.find((i) => i.word === element);
        if (s == null)
            result += "�";
        else
            result += s.emoji;
    });
    outputField.innerText = result;
}
window.onload = function () {
    var form = document.getElementById("mainForm");
    form.onchange = updated.bind(form);
};
