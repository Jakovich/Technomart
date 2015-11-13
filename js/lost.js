(function() {
	var link = document.querySelector(".lost");
	var popupLost = document.querySelector(".modal-lost");
	var close = popupLost.querySelector(".modal-close");
	var btnReset =  popupLost.querySelector(".btn-reset");
	var inputName = popupLost.querySelector("[name=name]");
	var inputEmail = popupLost.querySelector("[name=email]");
	var inputLetter = popupLost.querySelector("textarea");
	var form = popupLost.querySelector("form");
	var storageName = localStorage.getItem("inputName");
	var storageEmail = localStorage.getItem("inputEmail");

	//открытие модального окна
	link.addEventListener("click", function (event) {
		event.preventDefault(); popupLost.classList.add("modal-window-show");
		if (storageName){
			inputName.value = storageName;
			 if (storageEmail){
			inputEmail.value = storageEmail;
			inputLetter.focus();}
			else{
				inputEmail.focus();}
			}
		else{
			inputName.focus();
		}
	});
	//проверка заполнения полей форм
	form.addEventListener("submit", function(event){
		if (!inputName.value || !inputEmail.value || !inputLetter.value){
			event.preventDefault();
			popupLost.classList.add("modal-window-error");
			alert("Заполните все поля, пожалуйста!");

		}
		else{
			localStorage.setItem("inputName", inputName.value);
			localStorage.setItem("inputEmail", inputEmail.value);
		}
	});
	//закрытие модального окна
	btnReset.addEventListener("click", function (event) {
		event.preventDefault();
		popupLost.classList.remove("modal-window-show");
	});
	close.addEventListener("click", function (event) {
		event.preventDefault();
		popupLost.classList.remove("modal-window-show");
		popupLost.classList.remove("modal-window-error");
	});
	//закрытие окна при нажатии клавиши esc
	window.addEventListener("keydown", function (event) {
		if (event.keyCode === 27) {
			if (popupLost.classList.contains("modal-window-show")) {
				popupLost.classList.remove("modal-window-show");
				popupLost.classList.remove("modal-window-error");
			}
		}
	});
}());
