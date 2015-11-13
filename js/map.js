(function() {
	var linkMap = document.querySelector(".map");
	var mapPopup = document.querySelector(".modal-window-map");
	var mapClose = mapPopup.querySelector(".modal-close");
	linkMap.addEventListener("click", function (event) {
		event.preventDefault();
		mapPopup.classList.add("modal-window-show");
	});
	mapClose.addEventListener("click", function () {
		mapPopup.classList.remove("modal-window-show");
	});
	window.addEventListener("keydown", function () {
			if (mapPopup.classList.contains("modal-window-show")) {
				mapPopup.classList.remove("modal-window-show");
			}
	});
}());