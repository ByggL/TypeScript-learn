


document.getElementById("mainForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    let binaryField = document.getElementById("binary") as HTMLElement;
    let decimalField = document.getElementById("decimal") as HTMLElement;

    if (binaryField.innerText.match(/^[0-1]+$/g) === null) {
        Error('Enter either 0 or 1');
        return;
    }

    const reversedBinaryText = binaryField.innerText
      .split('')
      .map(Number) // Convert to a number from string
      .reverse();

    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );

    decimalField.innerHTML = result.toString();
});