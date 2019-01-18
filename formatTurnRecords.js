/* Format and Store the Feedback */

// Prepopulate Turnrecords for testing purposes
var turnRecords=[];
turnRecords[0]=["r","w","w","r","b","w"];
turnRecords[1]=["r","g","g","w","b","b","w"];
var turn=2;
var alertString="";
formatTurnRecords(turnRecords);
alert(alertString);

// Define function formatTurnRecords 
function formatTurnRecords(turnRecords) {
// initialize thisGuess string
var thisGuess="";
// initialize thisFeedback string
var thisFeedback="";
// turnRecords is a 2D array. Each row is one turn. Loop over each turn.
for (row=0;row<turn;row++){
	// For each row, add to alertString what we show player before they guess:
	// Add word “guess”, then show the turn number (row + 1) plus colon “:” 
	alertString=alertString.concat("Guess "+(row+1)+": ");
	// Assign to thisGuess the first 4 values of turnRecords for this row (that turn’s guess) and join them with spaces.
	thisGuess=turnRecords[row].slice(0,4).join(" ");
	// Add thisGuess to alertString (set it equal to itself plus thisGuess)
	alertString=alertString.concat(thisGuess);
	// Add a separator (“||”) to alertString before the feedback
	alertString=alertString.concat(" || ");
	// Pull feedback from turnRecords (based on turnRecords.length) and add to thisFeedback
	thisFeedback=turnRecords[row].slice(4,turnRecords[row].length).join(" ");
	// Add thisFeedback to alertString
	alertString=alertString.concat(thisFeedback);
	alertString=alertString.concat("\n");
}
}

