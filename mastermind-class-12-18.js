/* Class Mastermind */
// NOTE: This file runs ONE turn only.  Test to ensure feedback is correct. 

/* Initializations by Hasan*/
// colors, code, guess, feedback (arrays) and turn (0);
// populate colors = r,b,g,w,c,y
var colors=[], code=[], guess=[], feedback=[];
var turn=0;
colors = ["r","b","g","w","c","y"];

/* Main Function */
// define Main function
function main() {
	// increment turn
	turn++;
	// set code = setCode(colors)
	code=setCode(colors); 
	// set guess = getGuess
	guess=getGuess();
	// set feedback = testGuess(guess)
	feedback=testGuess(code,guess); 
	// alert turn and feedback
	alert("Guess "+turn+" : "+guess+" returns: "+feedback); // ADD IT
}
	
/* Functions */

/* Create the Secret Code */
// define function setCode to pull from six colors to randomly fill code with four values 0-5
function setCode(colors){
	for(var i=0; i<4; i++){
		code[i]=colors[Math.floor(Math.random()*6)];
	}
	console.log(code);
	return code;
}

/* Get a Player's Guess */
// define function getGuess to prompt player for each of four values and store in guess array
function getGuess(){
	for(var i=0; i<4; i++){
		guess[i]=prompt("Enter a color for position "+(i+1));
	}
	console.log(guess);
	return guess;
}

/* Analyze the Guess */
// define function testGuess to analyze guess against code and produces feedback
function testGuess(code,guess){
	// initialize b, w, as 0;
	var b=0, w=0;
	// initialize tempCode and tempGuess arrays, as copies with array.slice(0);
	var tempCode = code.slice(0);
	var tempGuess = guess.slice(0);
	// count the blacks and erase tempcode and tempguess as you go - one loop
	for (var g=0;g<4;g++){
		if (tempGuess[g]==tempCode[g]) {
			b++;
			tempGuess[g]="";
			tempCode[g]="";
		}
	}	
	// count the whites and erase tempcode and tempguess as you go - two nested loops
	for (g=0;g<4;g++){
		for (var c=0;c<4; c++){
			if (tempGuess[g]==tempCode[c] && tempGuess[g]!=""){
				w++;
				tempGuess[g]="";
				tempCode[c]="";
				// use "continue" once a match is found in the inner loop
				continue;
			}
		}
	}
	// console.log the feedback
	console.log("Blacks = "+b+" and Whites equals "+w);
	// call the feedback function, sending it black and white counts
	var feedback=formatFeedback(b,w);
	// return the feedback
	return feedback;
}

/* Format the Feedback */	
// define function formatFeedback to rewrite the feedback array: put b's first, w's second
function formatFeedback(b,w){
	// clear the feedback
	var feedback=[]; 
	// write the black pegs first
	for (var i=0;i<b;i++){
		feedback[i]="b";
	}
	// write the white pegs second
	for (i=b;i<b+w;i++){
		feedback[i]="w";
	}
	// console log the feedback
	console.log("Feedback = "+feedback);
	// return the feedback 
	return feedback;
}
