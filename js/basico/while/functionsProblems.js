function isEven(num){
	var result;
	if(num % 2 === 0){
		result = true;
	}
	else{
			result = false;
	}
	return result;
}

function factorial(num){
	var result = num;
	if(result === 1){
		result = 1;
	}
	else{
		result = result * factorial(result- 1);
	}
	return result;
}


function kebabToSnake(str){
	var newStr = str.replace(/-/g, "_");
	return newStr;
}

