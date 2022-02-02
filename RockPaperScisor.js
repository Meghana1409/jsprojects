
let answers = ["rock", "paper", "scissor"];
let userchoice=prompt("Choose rock / paper or scissor").toLowerCase();
let compschoice = answers[Math.floor(Math.random()*answers.length)]

if(!userchoice || answers.indexOf(userchoice)==-1){
    console.log("Please enter valid choice!!!");
}
else if(userchoice === compschoice) {console.log( "Tie!");}

else if(userchoice === "rock" && compschoice === "paper") {console.log ("You lose, computer picked " +  compschoice);}
 else if(userchoice === "paper" && compschoice === "scissor") {console.log ("You lose, computer picked " +  compschoice);}
 else if(userchoice === "scissor" && compschoice === "rock") {console.log ("You lose, computer picked " +  compschoice);}
else{
  console.log ("You win! Computer picked " +  compschoice);}
