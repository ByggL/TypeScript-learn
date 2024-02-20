type Currency = {
	name: string;
	symbol: string;
	value: number; // value in the currency for 1 euro (€)
};

var currencyList: Currency[] = [
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

function update(e: any) {  // any type is not recommended but it's the only way to not get errors
	e.preventDefault();

	// It's necessary to put every used DOM element inside a variable so the type can be fixed 
	let inputField = document.getElementById("input") as HTMLInputElement;
	let resultField = document.getElementById("result") as HTMLElement;

	let currencyInField = document.getElementById("currencyIn") as HTMLInputElement;
	let currencyOutField = document.getElementById("currencyOut") as HTMLInputElement;

	let currencyIn = currencyList.find(i => i.name === currencyInField.value) as Currency;
	let currencyOut = currencyList.find(i => i.name === currencyOutField.value) as Currency;

	let result = parseInt(inputField.value)/currencyIn.value;   // first we convert the input to Euro
	result *= currencyOut.value;								// then we convert from Euro to the final currency

	resultField.innerText = result + " " + currencyOut.name + " (" + currencyOut.symbol + ")"; // result
}

window.onload = function () {
	var form = document.getElementById("mainForm") as HTMLInputElement;
	// form.onsubmit = submitted.bind(form);
	form.onchange = update.bind(form);
};
