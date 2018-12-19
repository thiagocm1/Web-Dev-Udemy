var url = "http://worldclockapi.com/api/json/utc/now."
$.ajax({
	type: "GET",
	url: url,
	timeout: 3000,
	dataType: "json",
	cache: false,
	error: function(){
		$("h2").html("erro!");
	},
	success: function(res){
		document.getElementsByTagName("body")[0].innerText = res.currentDataTime;
	}
})