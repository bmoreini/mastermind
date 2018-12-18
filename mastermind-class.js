/* Class Mastermind */

/* Initializations by Hasan*/
var colors=[], code=[], guess=[], feedback=[];
var turn=0;
colors = ["r","b","g","w","c","y"];

function main() {
	setCode(colors);
	getGuess();
	testGuess(code,guess);
	}
	
/* Functions */

/* Create the Secret Code by Wyatt and Ben Woods*/
function setCode(colors){
	for(var i=0; i<4; i++){
		code[i]=colors[Math.floor(Math.random()*6)];
	}
	console.log(code);
	return code;
}

/* Get a Player's Guess by BenM and Chris*/
function getGuess(){
	for(var i=0; i<4; i++){
		guess[i]=prompt("Enter a color for position "+(i+1));
	}
	console.log(guess);
	return guess;
}

/* Analyze the Guess by Joe and Andrew and Hasan*/
function testGuess(code,guess){
	var b=0, w=0;
	var tempCode = code.slice(0);
	var tempGuess = guess.slice(0);
	for (var g=0;g<4;g++){
		if (tempGuess[g]==tempCode[g]) {
			b++;
			tempGuess[g]="";
			tempCode[g]="";
		}
	}	
	for (var g=0; g<4;g++){
		for (var c=0; c<4; c++){
			if (tempGuess[g]==tempCode[c] && tempGuess[g]!=""){
				w++;
				tempGuess[g]="";
				tempCode[c]="";
				continue;
			}
		}
	}
	console.log("Blacks = "+b+" and Whites equals "+w);
	feedback=formatFeedback(b,w);
	return feedback;
}

/* Create our Feedback by Mr. M. */
function formatFeedback(b,w){
	// clear out feedback
	feedback=[]; 
	for (var i=0;i<b;i++){
		feedback[i]="b";
	}
	for (var i=b;i<b+w;i++){
		feedback[i]="w";
	}
	console.log("Feedback = "+feedback);
	return feedback;
}
	









