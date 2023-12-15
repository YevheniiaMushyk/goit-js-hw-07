const bodyColor = document.querySelector("body");
const valueColor = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
buttonColor.addEventListener("click", (event) => {
	event.preventDefault();
	getRandomHexColor();
	bodyColor.style.backgroundColor = getRandomHexColor();
	valueColor.textContent = getRandomHexColor();
});
