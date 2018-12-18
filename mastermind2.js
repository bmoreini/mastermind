/* Mastermind I - no saved turns */

/* Initialization */
//colors, code, guess, feedback -- all arrays
var colors = ['r', 'c', 'w', 'g', 'b', 'y'];
var code=[];
var guess=[];
var feedback=[];
var cleanFeedback=[];
var turnRecords=[];
var turn=0;


/* Main Method */
function main() {
	code=setCode();
	alert("Enter a color by keying the first letter of red, cyan, white, green, black, yellow.");
	while (cleanFeedback[3]!="b" && guess[0]!="q"){
		turn++;
		guess=getGuess().slice(0);
		feedback=testGuess(guess).slice(0);
		cleanFeedback=formatFeedback(feedback).slice(0);
		turnRecords=addTurn(turn, guess, cleanFeedback).slice(0);
	}
	if (cleanFeedback[3]=="b") alert("Charlie? You've won, my boy!");
	else alert ("Quitter!");
}

/* Functions */

/* Create the Secret Code */
// function pulls from six colors to randomly fill code with four values
function setCode() {
	for (i=0;i<4;i++) {
		code[i]=colors[Math.floor(Math.random()*6)];
	}
	console.log(code);
	return code;
}

/* Get a Player's Guess */
// function prompts player for each of four values and stores in array
function getGuess() {
	for (i=0;i<4;i++) {
		guess[i]=prompt("Enter color "+(i+1)+":");
	}
	console.log(guess);
	return guess;
}

/* Analyze the Guess */
function testGuess(guess) {
	// function analyzes guess against code and produces feedback
	// initialize the temporary code and guess arrays (copies)
	var tempcode=code.slice(0);
	var tempguess=guess.slice(0);
	// count the blacks and erase tempcode as you go - one loop
	for (g=0;g<4;g++) {
		if (tempguess[g]!="" && tempguess[g]==tempcode[g]){
			feedback[g]="b";
			tempcode[g]="";
			tempguess[g]="";
		}
	}
	console.log("Blacks Feedback: "+feedback);
	// count the whites and erase tempcode as you go - nested loops
	for (g=0;g<4;g++) {
		for (c=0;c<4;c++) {
			if (tempguess[g]!="" && tempguess[g]==tempcode[c]) {
				feedback[g]="w";
				tempcode[c]="";
				tempguess[g]="";
				// use "continue" once a match is found in the inner loop
				//continue;
			}
		}
	}
	// send the feeback to the formatter
	console.log("Whites Feedback: "+feedback);
	return feedback;
}

/* Format the Feedback */
function formatFeedback(feedback) {
// function writes cleanFeedback to put b's first, w's second, delete the res
	// initialize the black and white count variables
	var b=0;
	var w=0;
	var cleanFeedback=[];
	// count the blacks and whites
	for (i=0;i<4;i++) {
    	// count the black pegs
		if (feedback[i]=="b") {
			b++;
		}
    	// count the white pegs
		else if (feedback[i]=="w") {
			w++;
		}
	}
	// define remainder as 4 - (b + w)
	var remainder = 4-(b+w);
	// write the black pegs
	for (i=0;i<b;i++) {
		cleanFeedback[i]="b";
	}
	// write the white pegs
	for (i=b;i<b+w;i++) {
		cleanFeedback[i]="w";
	}
	// delete the blanks in the feedback remainder with array.pop
	for (i=1;i<remainder;i++) {
		cleanFeedback.pop();
	}
	// return the new feedback array
	console.log("Formatted Feedback: "+cleanFeedback);
	return cleanFeedback;
}


/* Add Turn (Guess, Feedback) to TurnRecords */
function addTurn(turn,guess,cleanFeedback){
	var thisTurn =[];
	var turnValues=4+cleanFeedback.length;
	for (i=0;i<turnValues;i++){
		if (i<4){
			thisTurn.push(guess[i]);
		}
		else if (i>3){
			thisTurn.push(cleanFeedback[i-4]);
		}
	}
	alert("This Turn = "+thisTurn);
	turnRecords.push(thisTurn);
	alert("Turn Records for turn "+turn+": "+turnRecords[turn-1]);
	return turnRecords;
	/*tested: No*/
}


