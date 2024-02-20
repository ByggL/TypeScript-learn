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
	}, // add other currencies
];

function submitted(e: any) {
	e.preventDefault();

	let binaryField = document.getElementById("binary") as HTMLInputElement;
	let currencyField = document.getElementById("currency") as HTMLInputElement;
	let resultField = document.getElementById("result") as HTMLElement;

	if (binaryField.value.match(/^[0-9]+$/g) === null) {
		resultField.innerText = "Error : input is not a number";
		return;
	}

	// todo : conversion en currency
	//        function to get target and origin currency into Currency type vars

	resultField.innerText = ""; // result
}

window.onload = function () {
	var form = document.getElementById("mainForm") as HTMLInputElement;
	form.onsubmit = submitted.bind(form);
};
