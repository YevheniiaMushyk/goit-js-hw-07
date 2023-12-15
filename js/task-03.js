const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
	const inputValue = event.currentTarget.value.trim();
	return inputValue ? (span.textContent = inputValue) : (span.textContent = "Anonymous");
});
