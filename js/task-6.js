const block = document.querySelector("#controls");
const inputSell = block.firstElementChild;
inputSell.addEventListener("change", (event) => {
	return event.currentTarget.value;
});
const createBlock = inputSell.nextElementSibling;
const createBlockMarkup = [];
function createBoxes(amount) {
	for (let i = 1; i <= amount; i += 1) {
		createBlockMarkup.push(`<div id="boxes"></div>`);
	}
}
createBlock.addEventListener("click", (event) => {
	if (inputSell >= 1 && inputSell <= 100) {
		block.insertAdjacentHTML("beforeend", createBoxes(inputSell));
	} else {
		alert("Invalid value");
	}
	inputSell.reset();
});
