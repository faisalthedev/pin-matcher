// Variables
const generateBtn = document.querySelector(".generate-btn");
const pinInput = document.querySelector("#pinInput");
const warningMsg = document.querySelector("#warning");
const successMsg = document.querySelector("#success");
const numbers = document.querySelector(".numbers");
const pinDisplay = document.querySelector("#pinDisplay");
const submitBtn = document.querySelector(".submit-btn");

// Hide both
warningMsg.style.display = "none";
successMsg.style.display = "none";

// Generated Pin
generateBtn.addEventListener("click", () => {
	let pinNumber = Math.floor(100000 + Math.random() * 900000);
	pinNumber = pinNumber.toString().substring(0, 4);
	pinNumber = parseInt(pinNumber);
	pinInput.value = pinNumber;
});

// Display Typed Pin
numbers.addEventListener("click", (e) => {
	if (e.target.matches(".button")) {
		const keyNumber = e.target.textContent;

		if (keyNumber !== "C" && keyNumber !== "<") {
			if (pinDisplay.value === "0") {
				pinDisplay.value = keyNumber;
			} else {
				pinDisplay.value += keyNumber;
			}
		} else {
			// Reset pin
			pinDisplay.value = 0;
		}
	}
});

function parseNumber(id) {
	const value = id.value;
	const number = parseInt(value);
	return number;
}

submitBtn.addEventListener("click", (e) => {
	const generatedPin = parseNumber(pinInput);
	const typedPin = parseNumber(pinDisplay);

	if (generatedPin === typedPin) {
		successMsg.style.display = "block";
	} else {
		warningMsg.style.display = "block";
	}
});
