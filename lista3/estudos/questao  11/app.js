var url = "http://worldclockapi.com/api/json/utc/now";
fetch(url).then(response => response.json()).then(result => {
		console.log(result);
		document.getElementsByTagName("body")[0].innerText = result;

}).catch(err => {
		console.error("error",err);
});