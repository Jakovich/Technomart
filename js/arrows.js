
			var arrowLeft = document.querySelector(".arrows-left");
var arrowRight = document.querySelector(".arrows-right");
			var btn1 = document.getElementById("btn-1");
			var btn2 = document.getElementById("btn-2");
			arrowLeft.addEventListener("click", function (event){
				console.log("Done;");
				if(btn1.hasAttribute('checked')){
					console.log("yesbtn1");
					btn1.removeAttribute('checked');
					btn2.setAttributeAttribute('checked')
				}
				else{console.log("yesbtn2");
				     btn2.removeAttribute('checked');
					btn1.setAttributeAttribute('checked')
				}
				
			});
		
	