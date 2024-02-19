function submitted(e: any) {
  e.preventDefault();

  let binaryField = document.getElementById("binary") as HTMLInputElement;
  let decimalField = document.getElementById("decimal") as HTMLElement;

  if (binaryField.value.match(/^[0-1]+$/g) === null) {
      decimalField.innerText = "Error : input is not binary";
      return;
  }

  let reversedBinaryText = binaryField.value.split('').map(Number).reverse(); // converts the input into an array of 1 and 0

  let result: number = 0;
  for(let i:number = 0; i<reversedBinaryText.length; i++) {  // converts the arrayed binary number into a decimal number
    result += reversedBinaryText[i] * Math.pow(2,i);
  }

  decimalField.innerText = result.toString();
}


window.onload = function() {
  var form = document.getElementById("mainForm")  as HTMLInputElement;
  form.onsubmit = submitted.bind(form);
}