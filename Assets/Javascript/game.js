
$(document).ready(function() {
//Variables

var wins = 0;
var losses = 0;
var totalScore = 0;
var random= Math.floor((Math.random()* 100 + 19));//random number 19-120
var btn1 = Math.floor((Math.random() * 12) + 1);//random number 1-12
var btn2 = Math.floor((Math.random() * 12) + 1);
var btn3 = Math.floor((Math.random() * 12) + 1);
var btn4 = Math.floor((Math.random() * 12) + 1);


//Game starts with a random number generated by the computer between 19-120

//Game starts with a random number generated by the computer between 19-120
var computerNumber = function() {
      
      document.querySelector("#random-number").innerHTML = random;
    };  
//Game starts with wins and losses set to zero
var winsCounter = function() {
      
      document.querySelector("#winsDisp").innerHTML = wins;
    };  

var lossesCounter = function() {
      
      document.querySelector("#lossesDisp").innerHTML = losses;
    };  
//reset game after win or loss
var reset = function() {
    computerNumber() = random;
    btn1();
    btn2();
    btn3();
    btn4();
}

//click events on 4 different buttons that are jewels and are set to random numbers
$("#btn1").on("click", function() {
        
      });
$("#btn2").on("click", function() {
        
      });
$("#btn3").on("click", function() {
        
      });
$("#btn4").on("click", function() {
        
      });
//every time a button is clicked it displays a score in the bottom box
if (totalScore === random) {
	alert("You win!");

}
//if user gets the random number without going over they win the game
	//this generates an alert stating "You Win!!" in the wins and losses section
	//this resets the total score to zero
	//this adds a +1 to wins
	//this resets the values of each jewel button to a new number between 1 and 12
	//this tells the computer to generate a new random number between 19 and 120
else {
	alert("You lost!");
}
//if the user goes over the random number after pressing the jewel button they lose
	//this generates an alert stating "You Lost!!" in the wins and losses section
	//this resets the total score to zero
	//this adds a +1 to losses
	//this resets the values of each jewel button to a new number between 1 and 12
	//this tells the computer to generate a new random number between 19 and 120
//reset function
})

