/* Mastermind 1: Simple */

/* Global variables or Globals */
var colors = ["r","b","g","w","c","y"];code = []; guess = []; feedback = []; turn = 0;

/* Main */
code=setCode(colors);
while (feedback[3]!="b" && guess[0]!="q") {
	turn++;
	guess=getGuess(colors);
	feedback=testGuess(code,guess);
	console.log("Turn "+turn+" guess: "+guess+" feedback: "+feedback);
}
if (feedback[3]=="b") alert("You guessed it in "+turn+" turns!");
else if (guess[0]=="q") alert("Quitter!");
else alert("huh?");


function setCode(colors){
  	for(var i=0; i<4; i++){
  		code[i]=colors[Math.floor(Math.random()*6)];
	}
	console.log(code);
  	return code;
}

function getGuess(colors){
	let guessString=prompt("Enter 4 colors, comma-separated: \n[r]ed, [b]lack, [y]ellow, [g]reen, [c]yan, [w]hite");
	guess = guessString.split(",")
	return guess;
}

function testGuess(code,guess){
	let b = 0, w = 0;
	let tempCode = code.slice(0), tempGuess = guess.slice(0);
	for (g=0;g<4;g++){
		if (tempGuess[g]==tempCode[g] && tempGuess[g]!=""){
			b++;
			tempGuess[g]="";
			tempCode[g]="";
		}
	}
	for (g=0;g<4;g++){
		for (c=0;c<4;c++){
			if (tempGuess[g]==tempCode[c] && tempGuess[g]!=""){
				w++;
				tempCode[c]="";
				tempGuess[g]="";
				continue;
			}
		}
	}
	feedback=formatFeedback(b,w);
	return feedback;
}

function formatFeedback(b,w) {
	let feedback=[];
	for(var f=0;f<b;f++){
		feedback[f]="b";
	}
	for(var f=b;f<w+b;f++){
		feedback[f]="w";
	}
	return feedback;
}
