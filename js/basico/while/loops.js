console.log("PRITING ALL NUMBERS BETWEEN -10 AND 19");

var counter = -10;

while(counter < 20){
	console.log(counter);
	counter++;
}

var counter1 = 10;
console.log("PRITING ALL EVEN NUMBERS BETWEEN 10 AND 40");
while(counter1 <= 40){
	if( counter1 % 2 == 0){
		console.log(counter1);
	}
	counter1 ++;
}

var counter = 300;
console.log("PRITING ALL ODD NUMBERS BETWEEN 300 AND 333");
while(counter <= 333){
	if( counter % 2 != 0){
		console.log(counter);
	}
	counter ++;
}
var counter = 5;
console.log("PRITING ALL  NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
while(counter <= 50){
	if( counter % 3 === 0 && counter % 5 === 0){
		console.log(counter);
	}
	counter ++;
}
