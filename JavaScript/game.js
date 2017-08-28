var Num = 8;

var stringGuess = prompt("Guess the number :P");
var inputNum = Number(stringGuess);


if (inputNum > Num) {
	alert("Too high!!");
}

if (inputNum < Num) {
	alert("Too low!");
}

if (inputNum === Num) {
	alert("You guessed it!");
}

