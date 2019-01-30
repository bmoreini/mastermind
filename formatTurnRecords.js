/* Format and Store the Feedback *

/* Globals */

var turnRecords=[];
turnRecords[0]=["r","w","w","r","b","w"];
turnRecords[1]=["r","g","g","w","b","b","w"];
var turn=2;
var alertString="";

/* Main */
alertString=formatTurnRecords(turnRecords, alertString);
alert(alertString);

/* Function */
function formatTurnRecords(turnRecords, alertString) {
var thisGuess="";
var thisFeedback="";
for (row=0;row<turn;row++){
	alertString=alertString.concat("Guess "+(row+1)+": ");
	thisGuess=turnRecords[row].slice(0,4).join(" ");
	alertString=alertString.concat(thisGuess);
	alertString=alertString.concat(" || ");
	thisFeedback=turnRecords[row].slice(4,turnRecords[row].length).join(" ");
	alertString=alertString.concat(thisFeedback);
	alertString=alertString.concat("\n");
	} 
return alertString;
}
