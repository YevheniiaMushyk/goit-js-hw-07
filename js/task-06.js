const block = document.querySelector("#controls");
const inputBtn = block.firstElementChild;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function createBoxes(amount) {
	const boxes = document.querySelector("#boxes");
	destroyBoxes();
	let size = 30;
	for (let i = 1; i <= amount; i += 1) {
		const box = document.createElement("div");
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.marginTop = "5px";
		box.style.backgroundColor = getRandomHexColor();
		boxes.append(box);
		size += 10;
	}
}
const createBtn = inputBtn.nextElementSibling;
createBtn.addEventListener("click", () => {
	if (inputBtn.value >= 1 && inputBtn.value <= 100) {
		createBoxes(inputBtn.value);
		inputBtn.value = "";
	}
});

function destroyBoxes() {
	boxes.innerHTML = "";
}
const deleteBtn = block.lastElementChild;
deleteBtn.addEventListener("click", () => {
	destroyBoxes();
});
