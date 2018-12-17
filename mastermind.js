/* Mastermind I - no saved turns */

/* Initialization */
//colors, code, guess, feedback -- all arrays
var colors = ['r', 'c', 'w', 'g', 'b', 'y'];
var code=[];
var guess=[];
var feedback=[];

/* Main Method */
function main() {
	code=setCode(code,colors);
	guess=getGuess(guess);
	testGuess(guess,code,feedback);
}

/* Functions */

/* Create the Secret Code */
// function pulls from six colors to randomly fill code with four values
function setCode(code,colors) {
	for (i=0;i<4;i++) {
		code[i]=colors[Math.floor(Math.random()*6)];
	}
	console.log(code);
	return code;
}

/* Get a Player's Guess */
// function prompts player for each of four values and stores in array
function getGuess(guess) {
	alert("Enter a color by keying the first letter of red, cyan, white, green, black, yellow."); 
	for (i=0;i<4;i++) {	
		guess[i]=prompt("Enter color "+(i+1)+":");
	}
	console.log(guess);
	return guess;
}

/* Analyze the Guess */
// function analyzes guess against code and produces feedback
function testGuess(guess,code,feedback) {
  // initialize the temporary code array (copy of code)
	var tempcode=code;
	// count the blacks and erase tempcode as you go - one loop
	for (g=0;g<4;g++) {	
		if (guess[g]!="" && guess[g]==tempcode[g]){
			feedback[g]="b";
			tempcode[g]="";	
		}
	}
	console.log("Blacks Feedback: "+feedback);
	// count the whites and erase tempcode as you go - nested loops
	for (g=0;g<4;g++) {	
		for (c=0;c<4;c++) {
			if (guess[g]!="" && guess[g]==tempcode[c]) {
				feedback[g]="w";
				tempcode[c]="";
        // use "continue" once a match is found in the inner loop
				continue;
			}
		}
	}
	// send the feeback to the formatter
	console.log("Whites Feedback: "+feedback);
	feedback=formatFeedback(feedback);
	// console log the feedback
	console.log("Formatted Feedback: "+feedback);
}

/* Format the Feedback */
function formatFeedback(feedback) {
// function over-writes feedback to put b's first, w's second, delete the res
	// initialize the black and white count variables
	var b=0, w=0;
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
		feedback[i]="b";
	}
	// write the white pegs
	for (i=b;i<b+w;i++) {
		feedback[i]="w";
	}
	// delete the blanks in the feedback remainder with array.pop
	for (i=1;i<remainder;i++) {
		feedback.pop();
	}
	// return the new feedback array
	return feedback;
}