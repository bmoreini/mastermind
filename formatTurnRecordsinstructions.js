/* Format and Store the Feedback *

/* Globals */
// Prepopulate Turnrecords for testing purposes
var turnRecords=[];
turnRecords[0]=["r","w","w","r","b","w"];
turnRecords[1]=["r","g","g","w","b","b","w"];
var turn=2;
var alertString="";

/* Main */
// set alertString equal to result of formatTurnRecords (sending the function the turnRecords array, and blank alertString)

// alert the result


/* Function */
// Define function formatTurnRecords, with parameters turnRecords and alertString 

// initialize thisGuess string

// initialize thisFeedback string

// turnRecords is a 2D array. Each row is one turn. Loop over each turn.

	// For each row, add to alertString what we show player before they guess:
	// Add word “guess”, then show the turn number (row + 1) plus colon “:” 

	// Assign to thisGuess the first 4 values of turnRecords for this row (that turn’s guess) using slice, and join them with spaces.

	// Add thisGuess to alertString (set it equal to itself plus thisGuess) via concatenation

	// Add a separator (“||”) to alertString before the feedback

	// Pull the feedback elements from the last turnRecords row (based on turnRecords.length) and add to thisFeedback

	// Add thisFeedback to alertString
	
	// Add a line break to alertString
	
// end loop

// return alertString

// end function
