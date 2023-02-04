
// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword")
	const fPhone = document.getElementById("fPhone")

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById("errorAddress");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone");


	// Validate fields entered by the user: name, phone, password, and email
	const checkNames = /^[A-Za-z]+$/;
	const checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const checkPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
	const checkPhone = /^\d+$/


	if (fName.value == "" || fName.value.length < 3 || !fName.value.match(checkNames)) {
		errorName.style.display = "block"
		fName.style.border="thick solid #EA4B4B"
		error++;
	} else {
		errorName.style.display = "none"
	}

	if (fLastN.value == "" || fLastN.value.length < 3 || !fName.value.match(checkNames)) {
		error++;
		errorLastN.style.display = "block"
		fLastN.style.border="thick solid #EA4B4B"
	} else {
		errorLastN.style.display = "none"
	}

	if (fEmail.value == "" || fEmail.value.length < 3 || !fEmail.value.match(checkEmail)) {
		error++;
		errorEmail.style.display = "block"
		fEmail.style.border="thick solid #EA4B4B"
	}else{
		errorEmail.style.display = "none"	
	}

	if (fAddress == "" || fAddress.value.length < 3) {
		error++
		errorAddress.style.display = "block"
		fAdress.style.border="thick solid #EA4B4B"
	}else{
		errorAddress.style.display = "none"
	}

	if (fPassword == "" || fPassword.value.length < 3 || !fPassword.value.match(checkPassword)) {
		error++;
		errorPassword.style.display = "block"
		fPassword.style.border="thick solid #EA4B4B"
	}else{
		errorPassword.style.display = "none"
	}

	if (fPhone == "" || fPhone.value.length < 9 || !fPhone.value.match(checkPhone)) {
		errorPhone.style.display = "block"
		fPhone.style.border="thick solid #EA4B4B"
		error++;
	}else{
		errorPhone.style.display = "none"

	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}


