const login = {
	email: "",
	password: "",
};
const inputForm = document.querySelector(".login-form");
inputForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const form = event.target.elements;
	if (form.email.value.trim() && form.password.value.trim()) {
		login.email = form.email.value.trim();
		login.password = form.password.value.trim();
	} else {
		alert("All form fields must be filled in");
	}
	inputForm.reset();
});
