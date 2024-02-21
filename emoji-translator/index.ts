type Emoji = {
	emoji: string;
	word: string;
};

var emojiList: Emoji[] = [
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

function updated(e: any) {
	e.preventDefault();

	let inputField = document.getElementById("input") as HTMLInputElement;
	let outputField = document.getElementById("output") as HTMLElement;

	let inputWord: string[] = inputField.value.split(" ");
	let result: string = "";

	inputWord.forEach((element) => {
		let s = emojiList.find((i) => i.word === element) as Emoji;

		if (s == null) result += "�";
		else result += s.emoji;
	});

	outputField.innerText = result;
}

window.onload = function () {
	var form = document.getElementById("mainForm") as HTMLInputElement;
	form.onchange = updated.bind(form);
};
