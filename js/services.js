
			var selectUl = document. querySelector(".services-select");
var selectLink = selectUl.querySelectorAll("li");
var count;
			var serviceItem = document.querySelectorAll(".service-item");
			for (var i=0; i<selectLink.length; i++){
				selectLink[i].addEventListener("click", function(event){
					event.preventDefault();
					for (var j=0; j<selectLink.length; j++){
					selectLink[j].classList.remove("active");};
					this.classList.add("active");
					for (var j=0; j<serviceItem.length; j++){
					serviceItem[j].classList.remove("services-show")};
				})
				
			}
	/*if(selectLink[i].classList.contains("active")){
					for (var j=0; j<serviceItem.length; j++){
					serviceItem[j].classList.remove("services-show")};
				serviceItem[i].classList.add("services-show");
			}*/