const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);
const category = listItems.forEach((item) => {
	const itemTitle = item.querySelector("h2");
	console.log(`Category: ${itemTitle.textContent}`);
	const elements = item.querySelectorAll("li");
	console.log(`Elements: ${elements.length}`);
});
