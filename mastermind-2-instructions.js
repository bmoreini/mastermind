/* Class Mastermind */
// NOTE: This file stores the guess and turns in thisTurn, and stores thisTurn in turnRecords.  
// Test to ensure data is stored correctly.

/* Globals Initializations */
// colors, code, guess, feedback (arrays) and turn (0);
// populate colors = r,b,g,w,c,y
// add arrays for thisTurn, turnRecords
// run main function

/* Main Function */
// define main function
// tell player the colors: "Colors include [r]ed, [c]yan, [y]ellow," etc.
	// create the code with setCode
	// we're going to loop as long as the answer is wrong and the player didn't want to quit, so:
	// loop while fourth feedback is not a "b" and first guess is not a "q"
		// increment turn
		// set guess = getGuess
		// set feedback = testGuess(guess)
    // set thisTurn = addTurn(guess,feedback) 
		// push thisTurn to turnRecords
		// show all the turns, first to last
  // end loop
	// alert "Charlie you've won" if while loop ended with first condition

	// alert "Quitter!" if while loop ended with section condition
// end main
	
/* Functions */

/* Create the Secret Code */
// define function setCode to pull from six colors to randomly fill code with four values 0-5

/* Get a Player's Guess */
// define function getGuess to prompt player for each of four values and store in guess array

/* Analyze the Guess */
// define function testGuess to analyze guess against code and produces feedback
	// initialize b, w, as 0;
	// initialize tempCode and tempGuess arrays, as copies with array.slice(0);
	// count the blacks and erase tempcode and tempguess as you go - one loop
	// count the whites and erase tempcode and tempguess as you go - two nested loop
				// use "continue" once a match is found in the inner loop
	// console.log the blacks and whites feedback
  // create a temporary feedback array
  // add "b"s for the number of b's
	// add the "w"s for the number of w's
	// console.log("Feedback = "+feedback);
  // return the feedback array
  
// Define function addTurn to make an array thisTurn out of Guess and Feedback //
	// initialize thisTurn;
	// set turnValues = 4 + length of feedback
		// if index 0 - 3, write guess at index
		// if index > 3, write feedback at index (-4 to correct for position)
  // end loop	
	// console log thisTurn
  // NOTE: Once you get thisTurn console logged, comment out ALL OTHER console.logs except the code
	// return thisTurn
  // end function	

// Define function formatTurnRecords 
function formatTurnRecords(turnRecords){
	var alertString = "";
	var thisGuess = "";
	var thisFeedback = "";
	for (var row=0;row<turn;row++) {
		alertString = alertString.concat("Guess "+(row+1)+" : ");
		thisGuess=turnRecords[row].slice(0, 4).join(" ");
		alertString = alertString.concat(thisGuess);
		alertString = alertString.concat(" || ");
		thisFeedback= turnRecords[row].slice(4, turnRecords[row].length).join();
		alertString = alertString.concat(thisFeedback);
		alertString = alertString.concat("\n");
		alert(alertString); // testing purposes
	}
}
