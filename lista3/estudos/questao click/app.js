//var h1 = document.getElementById("demo").addEventListener("click", changeColors);

var h1 = document.querySelector("h1").addEventListener("click", changeColors);
function changeColors(){
	document.getElementById("demo").style.color = "red";
	document.getElementById('demo').innerHTML = "oie";

}
