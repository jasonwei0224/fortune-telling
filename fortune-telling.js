window.onload=function(){

  let numberOfSeconds = 0;
  let numberOfSticks = 0;
  let godChoice = 0;
  let godMood = 0;
  let timesPlayed = 0;
  imageDisplay = document.getElementById("imageDisplay");
  startButton = document.getElementById("startButton");
  restartButton = document.getElementById("restartButton");
  link = document.getElementById("description");

  imageDisplay.style.display = "none";
  link.style.display = "none";
  restartButton.style.display = "none";


  function random(maxNumber){
    return Math.floor(Math.random()* maxNumber);
  }

  //when clicked start button dispaly rule
  function startDraw(){
    //generate a random number that'll be use to determine how long the 籤筒is displayed
    numberOfSeconds = random(15)*1000; // maximum display time is 15 second
    restartButton.style.display = "none";
    startButton.style.display = "none";
    imageDisplay.style.display = "";
    //display the gif of user shaking the lottery box
    imageDisplay.src = "lottery.gif";
    //display draw after x number of second
    setTimeout(getDraw, numberOfSeconds);
    //console.log(numberOfSeconds);
  }
    startButton.onclick = startDraw;

   function getDraw(){
     godChoice = random(13); //use random to decide on which choice user gets
     //skip the number 0, or 4
     while(godChoice === 4 || godChoice === 0){
       godChoice = random(13);
     }

     //generate a random number that'll be use to determine how long the ask permission is gonna take
     numberOfSeconds = random(15)*1000;
     //console.log(numberOfSeconds);
     imageDisplay.style.display = 'none';
     imageDisplay.src = godChoice + ".png"; //uses the god choice number to get the choice and display on screen
     imageDisplay.style.display = "";
     //change button to continue;
     startButton.innerText = "continue";
     startButton.style.display = "";
     startButton.onclick = askPermission;
   }

   function askPermission(){
     //display user asking for permission
     imageDisplay.src = "lottery2.gif";
     startButton.style.display = "none";
     setTimeout(checkDecision,numberOfSeconds);
   }

   function getDecision(){
     //get decision there are three options
     // 1. laugh
     // 2. Granted
     // 3. No
     if(timesPlayed === 3){
		 godMood = 2;
		 //console.log("Mood:" + godMood);
      }
	  else{
     godMood = random(3)+1;
	   }
	    //console.log("Mood:" + godMood);
   }
   // checks the decision of god
   function checkDecision(){
     getDecision();
     if(godMood === 1){
       //display NO image if the number is one and display the restart button
       imageDisplay.src = "bad.png";
       startButton.style.display = "none";
       restartButton.style.display = "";

     }
     else if (godMood === 2){
       //display the Yes image if the number is 2 and give link to the explanation
       imageDisplay.src = "good.png";
       link.style.display = "" ;
       document.getElementsByTagName("a").href = godChoice + ".html";
     }
     else{
       //display the laughing image if the number is 3 and the restart button
       imageDisplay.src = "laugh.png"
       startButton.style.display = "none";
       restartButton.style.display = "";
       }
   }
   restartButton.onclick = startDraw; //restart the process



}
