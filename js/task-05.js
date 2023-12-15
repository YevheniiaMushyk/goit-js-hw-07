const bodyColor = document.querySelector("body");
const valueColor = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
buttonColor.addEventListener("click", (event) => {
	const color = getRandomHexColor();
	bodyColor.style.backgroundColor = color;
	valueColor.textContent = color;
});
