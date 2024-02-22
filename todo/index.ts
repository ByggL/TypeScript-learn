type todoElement = string;

var todoList: todoElement[] = [];

function submitted(e: any) {  // any type is not recommended but it's the only way to not get errors
	e.preventDefault();

	// It's necessary to put every used DOM element inside a variable so the type can be fixed 
	let inputField = document.getElementById("input") as HTMLInputElement;
	let resultField = document.getElementById("list") as HTMLElement;
	
	let newElement: todoElement = inputField.value;

	resultField.appendChild(newListElement(newElement));
}

window.onload = function () {
	var form = document.getElementById("mainForm") as HTMLInputElement;
	// form.onsubmit = submitted.bind(form);
	form.onsubmit = submitted.bind(form);
};


function newListElement(text: string): HTMLElement {
	let element: HTMLElement = document.createElement("li");
	let x: HTMLElement = document.createElement("input"); x.setAttribute("type", "checkbox");
	let txt: HTMLElement = document.createElement("p"); txt.innerText = text;
	let btn: HTMLElement = document.createElement("button"); btn.innerText = "Remove";

	element.appendChild(x);
	element.appendChild(txt);
	element.appendChild(btn);

	return element;
}