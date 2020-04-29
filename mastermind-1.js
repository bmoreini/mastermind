 /* mastermind hs */
 main();
 
 function main(){
   var code = [], guess = [], colors = ["r", "y", "g", "c", "b", "w"], feedback=[], guessed=[];
	 setUpCode();
	 getGuess();
	 analyzeGuess();
	 console.log(guess, feedback);
	 
	 function setUpCode(){
		 code = [];
		 for(let peg=0;peg<4;peg++){
			 let color=Math.floor(Math.random()*5)+1;
			 code[peg]=colors[color];
		 }
     console.log(code);
		 return code;
	 }
	 
	 function getGuess(){
		 guess=[];
		 let guessString=prompt("Enter four colors for your guess (separated by commas, no spaces).");
		 guess=guessString.split(",");
		 return guess;
	 }
	 
	 function analyzeGuess(){
		 feedback = [];
		 guessed = [];
		 for(i=0;i<3;i++){
			 if(guess[i]==code[i]){
				 feedback.push("b");
				 guessed.push(i);
			 }
      }
		  for(g=0;g<3;g++){
				 for(c=0;c<3;c++){
					  if(guessed.includes(c)){
						 continue;
					  }
						if(guess[g]==code[c]){
							 feedback.push("w");
							 guessed.push(c);
							 continue;
						}
					}
				}
				 return feedback;
		  }
	  }
