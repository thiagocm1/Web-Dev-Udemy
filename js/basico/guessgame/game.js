var secretNumber = 9;

var guess = Number(prompt("Guess a number: "));

if(guess == secretNumber){
	alert("you got!!!");
}
else if(guess > secretNumber){
	alert("Too high. Guess again!");
}
else{
	alert("Too low. Guess Again!")
}