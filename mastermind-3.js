// ADD TRY CATCH FOR WHEN USER DOESNT GUESS AND EXITS
// TypeError: Cannot read property 'split' of null

var colors = ["r","y","g","b","w","c"];
var turns = [];
var feedback = [];
var guess = [];
var turn = [];
var code = [];

code = setupCode();
alert(code);

while(feedback[3]!="b" && guess[0]!="q"){
  guess = getGuess();
  feedback = analyzeGuess();
  addTurn();
}
if(turns[turns.length][1][3]="b"){
  alert("Congrats! You guessed it in "+turns.length+"turns");
}
else{
  alert("Quitter");
}

function setupCode(){
  code=[];
  for(var peg=0;peg<4;peg++){
    var color = Math.floor(Math.random()*6); // Arrays start at 0
    code[peg] = colors[color];
  }
  console.log(code);
  return code;
}

function getGuess(){
  var guessString = prompt(displayTurns());
  guess = guessString.split(",");
  return guess;
}

function analyzeGuess(){
  var feedback = [];
  var guessedCode = [];
  var goodGuesses = [];

  for(i=0;i<4;i++){
    if(guess[i]==code[i]){
      feedback += "b";
      guessedCode += i;
      goodGuesses += i;
    }
  }
  for(g=0;g<4;g++){
    if(goodGuesses.includes(g)==false){
      for(c=0;c<3;c++){
        if(guessedCode.includes(c)==false){
          if(guess[g]==code[c]){
            feedback+="w";
            guessedCode+=c;
            goodGuesses+=g;
            break;
          }
        }
      }
    }
  }
  return feedback;
}

function addTurn(){
  var turn = [];
  turn.push(guess);
  turn.push(feedback);
  turns.push(turn);
}

function displayTurns(){
  var mmPrompt = "";
  for(var turnNumber=0;turnNumber<turns.length;turnNumber++){
    mmPrompt += "Guess: " + (turnNumber+1) + " ";
    mmPrompt += turns[turnNumber][0];
    mmPrompt += " || " + turns[turnNumber][1];
    mmPrompt += "\n";
  }
  return mmPrompt;
}