/* Class Mastermind */

/* Initializations by Hasan*/
// colors, code, guess, feedback (arrays) and turn (0);
// populate colors = r,b,g,w,c,y
var colors=[], code=[], guess=[], feedback=[];
var turn=0;
colors = ["r","b","g","w","c","y"];
// add arrays for thisTurn, turnRecords
var thisTurn = [], turnRecords = [];
/* Main Function */
// define Main function
	// set code = setCode(colors)
	// start while loop - run while fourth feedback not = "b" and first guess not = "q"
		// increment turn
		// set guess = getGuess
		// set feedback = testGuess(guess)
		// alert turn and feedback
	// }
	// alert "Charlie you've won" if while loop ended with first condition
	// alert "Quitter!" if while loop ended with section condition
//}

function main() {
	alert("Colors include [r]ed,[c]yan,y,w,b, g");
	code=setCode(colors); 
	while (feedback[3]!="b" && guess[0]!="q")  {
		turn++; 
		guess=getGuess(); 
		feedback=testGuess(code,guess); // calls formatFeedback
		// populate thisTurn with guess and feedback
		thisTurn=addTurn(guess,feedback);
		// write thisTurn to turnRecords
		turnRecords.push(thisTurn);
		// push thisTurn to turnRecords
		alert("Turn and Feedback "+turnRecords);
		//alert("Guess "+turn+" : "+guess+" returns: "+feedback); 
	}
	if (feedback[3]=="b") {
		alert ("Charlie you've won");
	}
	else if (guess[0]=="q"){
		alert("Quitter!");
	}
	
}
	
/* Functions */

/* Create the Secret Code */
// define function setCode to pull from six colors to randomly fill code with four values 0-5
function setCode(colors){
	for(var i=0; i<4; i++){
		code[i]=colors[Math.floor(Math.random()*6)];
	}
	console.log(code); // leave this in!
	return code;
}

/* Get a Player's Guess */
// define function getGuess to prompt player for each of four values and store in guess array
function getGuess(){
	for(var i=0; i<4; i++){
		guess[i]=prompt("Enter a color for position "+(i+1));
	}
	// console.log(guess);
	return guess;
}

/* Analyze the Guess */
// define function testGuess to analyze guess against code and produces feedback
// initialize b, w, as 0;
// initialize tempCode and tempGuess arrays, as copies with array.slice(0);
// count the blacks and erase tempcode and tempguess as you go - one loop
// count the whites and erase tempcode and tempguess as you go - two nested loops
	// use "continue" once a match is found in the inner loop
// call the feedback function, sending it black and white counts
// return the feedback

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
	for (g=0;g<4;g++){
		for (var c=0;c<4; c++){
			if (tempGuess[g]==tempCode[c] && tempGuess[g]!=""){
				w++;
				tempGuess[g]="";
				tempCode[c]="";
				continue;
			}
		}
	}
	// console.log("Blacks = "+b+" and Whites equals "+w);
	var feedback=formatFeedback(b,w);
	return feedback;
}

/* Format the Feedback */
// define function formatFeedback to rewrite the feedback array: put b's first, w's second
	// clear the feedback
	// write the black pegs first
	// write the white pegs second
	// console log the feedback
	// return the feedback 
	
function formatFeedback(b,w){
	var feedback=[]; 
	for (var i=0;i<b;i++){
		feedback[i]="b";
	}
	for (i=b;i<b+w;i++){
		feedback[i]="w";
	}
	// console.log("Feedback = "+feedback);
	return feedback;
}
/* Define function addTurn to make an array thisTurn from Guess and Feedback */
function addTurn(guess,feedback){
	// initialize thisTurn;
	var thisTurn=[];
	// set turnValues = 4 + length of feedback
	var turnValues=4+feedback.length;
	for (var i=0;i<turnValues;i++) {
		// if index 0 - 3, write guess sub index
		
		if (i < 4) {
			thisTurn[i]=guess[i];
		} // end if
		// if index > 3, write feedback sub index-4 to correct for position
		if (i > 3) {
			thisTurn[i]=feedback[i-4];
		} // end if
	} // end loop	
	// console log thisTurn
	console.log("thisTurn = "+thisTurn);
	// return thisTurn
	return thisTurn;
} // end function	