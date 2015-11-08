var buy = document.querySelectorAll(".buy");
var basket = document.querySelector(".modal-basket");
var basketClose = basket.querySelector(".modal-close");
var basketReset = basket.querySelector(".btn-reset");
for (var i = 0; i < buy.length; i++){
	buy[i].addEventListener("click", function(event){
		event.preventDefault();
		basket.classList.add("modal-window-show");
	});
	basketClose.addEventListener("click", function(event){
		basket.classList.remove("modal-window-show");
	});
	basketReset.addEventListener("click", function(event){
		basket.classList.remove("modal-window-show");
	});
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (basket.classList.contains("modal-window-show")){
				basket.classList.remove("modal-window-show");
			}
		}
	});
};