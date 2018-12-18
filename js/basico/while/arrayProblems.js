/// Print Reverse
function reverse(array){
	for(var i = array.length; i >= 0; i--){
		console.log(array[i]);
	}
}

function isUniform(array){
	var equal = array[0]
	var result = false;
	for(var i = 1; i < array.length; i++){
		if(equal == array[i]){
			equal = array[i];
			result = true;
		}
		else{
			equal = array[i];
			result = false;
		}
	}
	return result;
}

function sumArray(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		sum += array[i];
	}
	return sum;	
}
function maxElement(array){
	var max = array[0];
	for(var i = 1; i < array.length; i++){
		if(max < array[i]){
			max = array[i];
		}
	}
	return max;
}