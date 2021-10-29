var numWin= 0;
var numLost=0;

for(var i=1;i<=5;i++){
    var guessNumber= parseInt(prompt("Enter a number from one to five"));
    var randomNumber= Math.floor(Math.random()*5)+1;

if(guessNumber==randomNumber){
    console.log("You have won");
    numWin++;
}
else{
    console.log("you have lost: Random number was:"+randomNumber);
    numLost++;
}

}

document.write("number of win"+numWin+"<br>");
document.write("number of lost: "+numLost);