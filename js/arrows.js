
			var arrowLeft = document.querySelector(".arrows-left");
var arrowRight = document.querySelector(".arrows-right");
			var btn1 = document.getElementById("btn-1");
			var btn2 = document.getElementById("btn-2");
			arrowLeft.addEventListener("click", function (event){
				console.log("Done;");
				btn2.setAttribute("checked", "");
			});
			arrowRight.addEventListener("click", function (event){
				console.log("Done;")
			});
	