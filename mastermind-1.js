/* Mastermind 1: Simple */

/* Global variables or Globals */
var colors = ["r","b","g","w","c","y"];
var code = [];
var guess = [];
var feedback = [];
var turn = 0;

/* Main Routine */ 
code=setCode(colors);
while (feedback[3]!="b" && guess[0]!="q") {
	turn++;
	guess=getGuess(colors);
	feedback=testGuess(code,guess);
	console.log(feedback);
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
	for(var i=0; i<4; i++){
		guess[i]=prompt("Enter a color [r]ed, [b]lack, [y]ellow, [g]reen, [c]yan, [w]hite"+(i+1));
	}
  	console.log(guess);
	return guess;
}

function testGuess(code,guess){
	// initialize b, w, as 0;
	var b = 0, w = 0;
	// initialize tempCode and tempGuess arrays, as copies with array.slice(0);
	var tempCode = code.slice(0), tempGuess = guess.slice(0);
	// count the blacks and erase tempCode and tempGuess as you go - one loop
	for (g=0;g<4;g++){
		if (tempGuess[g]==tempCode[g] && tempGuess[g]!=""){
			b++;
			tempGuess[g]="";
			tempCode[g]="";
		}
	}
	// count the whites and erase tempCode and tempGuess as you go - nested loops
	for (g=0;g<4;g++){
		for (c=0;c<4;c++){
        // use "continue" once a match is found in the inner loop
		if (tempGuess[g]==tempCode[c] && tempGuess[g]!=""){
			w++;
			tempCode[c]="";
			tempGuess[g]="";
			continue;
		}
	}
}
	// set feedback equal to called formatFeedback function, sending it black and white counts
	// console.log("B = "+b+" and W = "+w);
	feedback=formatFeedback(b,w);
	// return the feedback
	return feedback;
}

/* Format the Feedback */
// define function formatFeedback to receive blacks and whites, put b's first, w's second, delete the rest
function formatFeedback(b,w) {
	// initialize feedback;
	var feedback=[];
	// loop from 0 to blacks count
	for(var f=0;f<b;f++){
		// write the black pegs first to feedback
		feedback[f]="b";
	}
	// loop from blacks count to whites count
	for(var f=b;f<w+b;f++){
		// write the white pegs second to feedback
		feedback[f]="w";
	}	
	// return the new feedback array
	return feedback;
}
