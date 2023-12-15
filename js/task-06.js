const block = document.querySelector("#controls");
const inputBtn = block.firstElementChild;
inputBtn.addEventListener("change", (event) => {
	return inputBtn.value;
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

let minWidth = 30;
let minHeight = 30;
let markupBox = [];
function createBoxes(amount) {
	const boxes = document.querySelector("#boxes");
	for (let i = 1; i <= amount; i += 1) {
		const box = `<div class="boxClass" style="width: ${minWidth}px; height: ${minHeight}px; margin-top: 5px; background-color: ${getRandomHexColor()};"></div>`;
		markupBox.push(box);
		minWidth += 10;
		minHeight += 10;
	}
	boxes.innerHTML = markupBox.join("");
	minWidth = 30;
	minHeight = 30;
	markupBox = [];
}
const createBtn = inputBtn.nextElementSibling;
createBtn.addEventListener("click", () => {
	if (inputBtn.value >= 1 && inputBtn.value <= 100) {
		createBoxes(inputBtn.value);
		inputBtn.value = "";
	} else {
		alert("Invalid value");
	}
});

function destroyBoxes() {
	const deletBoxes = boxes.querySelectorAll(".boxClass");
	const deleteMarkup = deletBoxes.forEach((box) => {
		box.remove();
	});
}
const deleteBtn = block.lastElementChild;
deleteBtn.addEventListener("click", () => {
	destroyBoxes();
});
