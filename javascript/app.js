(function () {
	document.querySelector(".form").addEventListener("submit", (event) => event.preventDefault());
	const value = document.querySelector("#quantity");
	const from = document.querySelector("#measure");
	const to = document.querySelector("#conversion");
	const result = document.querySelector("#result");
	const details = document.querySelector("#details");

	function meters(quantityValue, newValue) {
		if (newValue == "meters") {
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Metro(s) equivalem a ${quantityValue} Metro(s)`;
		} else if (newValue == "kilometers") {
			const newResult = quantityValue / 1000;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Metro(s) equivalem a ${newResult} Quilômetro(s)`;
		} else if (newValue == "centimeters") {
			const newResult = quantityValue * 100;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Metro(s) equivalem a ${newResult} Centímetro(s)`;
		} else {
			const newResult = quantityValue * 1000;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Metro(s) equivalem a ${newResult} Milímetro(s)`;
		}
	}

	function kilometers(quantityValue, newValue) {
		if (newValue == "kilometers") {
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Quilometro(s) equivalem a ${quantityValue} Quilometro(s)`;
		} else if (newValue == "meters") {
			const newResult = quantityValue * 1000;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Quilometro(s) equivalem a ${newResult} Metro(s)`;
		} else if (newValue == "centimeters") {
			const newResult = quantityValue * 100000;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Quilometro(s) equivalem a ${newResult} Centímetro(s)`;
		} else {
			const newResult = quantityValue * 1000000;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Quilometro(s) equivalem a ${newResult} Milímetro(s)`;
		}
	}

	function centimeters(quantityValue, newValue) {
		if (newValue == "centimeters") {
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Centímetro(s) equivalem a ${quantityValue} Centímetro(s)`;
		} else if (newValue == "meters") {
			const newResult = quantityValue / 100;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Centímetro(s) equivalem a ${newResult} Metro(s)`;
		} else if (newValue == "kilometers") {
			const newResult = quantityValue / 100000;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Centímetro(s) equivalem a ${newResult} Quilometro(s)`;
		} else {
			const newResult = quantityValue * 10;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Centímetro(s) equivalem a ${newResult} Milímetro(s)`;
		}
	}

	function millimeters(quantityValue, newValue) {
		if (newValue == "millimeters") {
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Milímetro(s) equivalem a ${quantityValue} Milímetro(s)`;
		} else if (newValue == "meters") {
			const newResult = quantityValue / 1000;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Milímetro(s) equivalem a ${newResult} Metro(s)`;
		} else if (newValue == "kilometers") {
			const newResult = quantityValue / 1000000;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Milímetro(s) equivalem a ${newResult} Quilometro(s)`;
		} else {
			const newResult = quantityValue / 10;
			result.textContent = quantityValue;
			details.textContent = `${quantityValue} Milímetro(s) equivalem a ${newResult} Centímetro(s)`;
		}
	}

	document.querySelector(".form__button").addEventListener("click", () => {
		if (from.value == "meters") {
			meters(value.value, to.value);
		} else if (from.value == "kilometers") {
			kilometers(value.value, to.value);
		} else if (from.value == "centimeters") {
			centimeters(value.value, to.value);
		} else {
			millimeters(value.value, to.value);
		}
	});
})();
