var data = "https://www.google.com";
$.ajax({
	type:"GET", // tipo de requisicao
	url: data, // atualizacao do sistema
	dataType: "json", // tipo do arquivo
	cache: false, // nao é pra manter salvo
	error: function() { // se der erro
		$("h2").html("ERRO!");
	},
	success: function(res){ // deu certo
		console.log(res);
		
	}
});

