const block = document.querySelector("#controls");
const inputSell = block.firstElementChild;
inputSell.addEventListener("change", (event) => {
	return inputSell.value;
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

let minWidth = 30;
let minHeight = 30;
function createBoxes(amount) {
	const boxes = document.querySelector("#boxes");
	for (let i = 1; i <= amount; i += 1) {
		const box = document.createElement("div");
		box.classList.add("boxClass");
		box.style.width = `${minWidth}px`;
		box.style.height = `${minHeight}px`;
		box.style.marginTop = `5px`;
		box.style.backgroundColor = getRandomHexColor();
		block.append(box);
		minWidth += 10;
		minHeight += 10;
	}
}
const createBlock = inputSell.nextElementSibling;
createBlock.addEventListener("click", () => {
	if (inputSell.value >= 1 && inputSell.value <= 100) {
		createBoxes(inputSell.value);
		const inputDelSell = block.firstElementChild;
		inputDelSell.reset();
	} else {
		alert("Invalid value");
	}
});

function destroyBoxes() {
	const deletBoxes = document.querySelector("#boxes");
	deletBoxes.children.innerHTML("beforeend", "");
}
const deleteBlock = block.LastElementChild;
deleteBlock.addEventListener("click", () => {
	destroyBoxes();
});
