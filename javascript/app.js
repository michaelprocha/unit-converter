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

	document.querySelector(".form__button").addEventListener("click", () => {
		if (from.value == "meters") {
            meters(value.value, to.value);
		} else if (from.value == "kilometers") {
		} else if (from.value == "centimeters") {
		} else {
		}
	});
})();
