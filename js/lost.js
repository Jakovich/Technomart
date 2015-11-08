var link = document.querySelector(".lost");
var popupLost = document.querySelector(".modal-lost");
var close = popupLost.querySelector(".modal-close");
var btnReset =  popupLost.querySelector(".btn-reset");
link.addEventListener("click", function (event) {
	event.preventDefault(); popupLost.classList.add("modal-window-show");
});
btnReset.addEventListener("click", function (event) {
	event.preventDefault();
	popupLost.classList.remove("modal-window-show");
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	popupLost.classList.remove("modal-window-show");
});
window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popupLost.classList.contains("modal-window-show")) {
			popupLost.classList.remove("modal-window-show");
			popupLost.classList.remove("modal-error");
		}
	}
});