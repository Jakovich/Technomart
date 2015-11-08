var linkMap = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-window-map");
var mapClose = mapPopup.querySelector(".modal-close");
linkMap.addEventListener("click", function (event) {
	mapPopup.classList.add("modal-window-show");
});
mapClose.addEventListener("click", function (event) {
	mapPopup.classList.remove("modal-window-show");
});
window.addEventListener("keydown", function (event) {
		if (mapPopup.classList.contains("modal-window-show")) {
			mapPopup.classList.remove("modal-window-show");
		}
});