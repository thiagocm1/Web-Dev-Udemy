const altura = document.getElementsByTagName("input")[0];
const peso = document.getElementsByTagName("input")[1];
const imc = document.getElementById("imc");

function calculaImc(){
	var calculaPeso = Number(peso.value);
	var calculaAltura = Number(altura.value);
	imc.innerText = "imc = " + funcaoIMC(calculaPeso, calculaAltura);
}
function funcaoIMC(calculaPeso, calculaAltura){
	var funcaoIMC = Math.round(10* (calculaPeso / (calculaAltura * calculaAltura)))/10;
	var result = tipoIMC(funcaoIMC) + funcaoIMC;
	return result;
}

function tipoIMC(funcaoIMC){
	var result = "";
	if((funcaoIMC >= 16) || (funcaoIMC <17)){
		result = " IMC Entre 16 e 16.9. Muito abaixo do peso ";
	}
	else if((funcaoIMC >= 17) || (funcaoIMC < 18.5)){
		result = "IMC Entre 17 e 18.4. Abaixo do peso " ;
	}
	
	else if((funcaoIMC >= 25) || (funcaoIMC < 30)){
		result = "IMC Entre 25 e 29.9. Acima do peso " ;
	}
	else if((funcaoIMC >= 30) || (funcaoIMC < 35)){
		result = "IMC Entre 30 e 34.9. Obesidade Grau 1 " ;
	}
	else if((funcaoIMC >= 35) || (funcaoIMC < 40)) {
		result = "IMC Entre 35 e 39.9. Obesidade Grau 2 " ;
	}
	else{
		result = "IMC Acima de 40. Obesidade Grau 3 " ;
	}
	return result;
}

setInterval(calculaImc,100);