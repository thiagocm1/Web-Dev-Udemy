var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var resetButton = document.getElementById("reset");

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			p2Display.classList.add("loser");
			console.log("GAME OVER!!");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
	
	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score ++;
	if(p2Score === winningScore){
		p2Display.classList.add("winner");
		p1Display.classList.add("loser");
			console.log("GAME OVER!!");
			gameOver = true;
		}

	p2Display.textContent = p2Score;
}
});
resetButton.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");
	p2Display.classList.remove("loser");
	p1Display.classList.remove("winner");
	p1Display.classList.remove("loser");
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);

});

