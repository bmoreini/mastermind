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
	// loop as long as the answer is wrong and the player didn't want to quit, so:
	// loop while fourth feedback is not a "b" and first guess is not a "q"
		// increment turn
		// set guess = getGuess
		// set feedback = testGuess(guess)
    		// set thisTurn = addTurn(guess,feedback) 
		// push thisTurn to turnRecords array (not a function)
		// set alertString = formatTurnRecords(turnRecords,alertString)
  	// end loop
// alert "Charlie you've won" if while loop ended with first condition
// alert "Quitter!" if while loop ended with section condition
// end main

/* Functions */

/* Create the Secret Code */
// define function setCode 
// pull from six colors to randomly fill code with four values 0-5

/* Get a Player's Guess */
// define function getGuess to prompt player for guess values and store in guess array
// Create string variable called correct = “n”.
// set a while loop that loops until correct not = “y”.
// Ask the player a complicated prompt:
// Show alertString, which is previous guesses and feedback
	// Show the current turn
// Ask player to input four colors surrounded by commas
	// Assign player input to string variable myGuess.
// Split string myGuess into four elements of array guess
// Ask the player if their input was correct y,n or c to show the colors. 
// if the player input is “c,” display the colors.
// return guess

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

/* Put Turn in thisTurn */ 
// Define function addTurn to make an array thisTurn out of guess and feedback //
// initialize thisTurn;
// set turnValues = 4 + length of feedback
// loop index over each of the turnValues
	// if index 0 - 3, write guess at index
	// if index > 3, write feedback at index (-4 to correct for position)
  	// end loop	
// console log thisTurn
// NOTE: Once thisTurn console is logged, comment out ALL OTHER console.logs except code
// return thisTurn
// end function		
 
/* Format and Store the Feedback */
// Define function formatTurnRecords (receive turnRecords as parameter)
// empty alertString
// initialize thisGuess string
// initialize thisFeedback string
// turnRecords is a 2D array. Each row is one turn. Loop over each turn.
	// For each row, add to alertString what we show player before they guess:
	// Add word “guess”, then show the turn number (row + 1) plus colon “:” 
// Assign to thisGuess the first 4 values of turnRecords for this row (that turn’s guess) and join them with spaces.
// Add thisGuess to alertString (set it equal to itself plus thisGuess)
// Add a separator (“||”) to alertString before the feedback
// Pull feedback from turnRecords (based on turnRecords.length) and add to thisFeedback
// Add thisFeedback to alertString
// Add a linebreak (a “return”) to alertString for the next loop ro
// end Loop
// return alertString
// end Function
