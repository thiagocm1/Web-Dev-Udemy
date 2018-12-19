$status.innerText = "salvando...";
update(aqui,text).then(function(){
	$status.innerText = "";
});