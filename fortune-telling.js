window.onload=function(){

  let numberOfSeconds = 0;
  let numberOfSticks = 0;
  let godChoice = 0;
  let godMood = 0;
  let timesPlayed = 0;
  imageDisplay = document.getElementById("imageDisplay");
  mainSection = document.getElementById("fortune-telling");
  //create and format start button
  startButton = mainSection.appendChild(document.createElement('BUTTON'));
  startButton.appendChild(document.createTextNode("Start"));
  startButton.id = "startButton";
  startButton.style.left="43%";
  startButton.style.bottom="20%";
  startButton.style.width="200px";
  startButton = document.getElementById("startButton");

  //create format restart button
  restartButton = mainSection.appendChild(document.createElement('BUTTON'));
  restartButton.appendChild(document.createTextNode("Restart"));
  restartButton.style.left="43%";
  restartButton.style.bottom="20%";
  restartButton.style.width="200px";
  restartButton.id = "restartButton";
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
    // maximum display time is 15 second
    numberOfSeconds = random(15)*1000;

    // hide the game description when start
    document.getElementById("gameName").style.display = "none";
    //hide the buttons
    restartButton.style.display = "none";
    startButton.style.display = "none";
    //display image
    imageDisplay.style.display = "";
    //display the gif of user shaking the lottery box
    imageDisplay.src = "lottery.gif";
    imageDisplay.style.left= "40%";
    imageDisplay.style.bottom="20%";
    imageDisplay.style.position="absolute";

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
     //uses the god choice number to get the choice and display on screen
     imageDisplay.src = godChoice + ".png";

     //change the location of the image
     imageDisplay.style.height="50%";
     imageDisplay.style.width = 'auto';
     imageDisplay.style.bottom= "35%";
     imageDisplay.style.left = "48%";
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

     //change the location of the image
     imageDisplay.style.width = "auto";
     imageDisplay.style.bottom = "30%";
     imageDisplay.style.height = "50%";
     imageDisplay.style.left = "38%";

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
	   console.log("Mood:" + godMood);
     if(godMood === 1){
       //display NO image if the number is one and display the restart button
       imageDisplay.src = "bad.png";
       imageDisplay.style.width = "auto";
       imageDisplay.style.bottom = "30%";
       imageDisplay.style.height = "50%";
       imageDisplay.style.left = "40%";
       startButton.style.display = "none";
       restartButton.style.display = "";
		   timesPlayed = timesPlayed +1;
		 //console.log("Times Played:" + timesPlayed);
     }
     else if (godMood === 2){
       //display the Yes image if the number is 2 and give link to the explanation
       imageDisplay.src = "good.png";
       imageDisplay.style.width = "auto";
       imageDisplay.style.bottom = "30%";
       imageDisplay.style.height = "50%";
       imageDisplay.style.left = "40%";

       //change the location of the link to the description
       link.style.display = "" ;
       link.style.bottom = "20%";
       link.style.left = "40%";
       link.style.position="absolute";
       link.style.fontSize = "30px";

       //restartButton.style.display="";
       document.getElementsByTagName("a").href = godChoice + ".html";
	     //console.log("Times Played:" + timesPlayed);
     }
     else{
       //display the laughing image if the number is 3 and the restart button
       imageDisplay.src = "laugh.png"
       imageDisplay.style.width = "auto";
       imageDisplay.style.bottom = "30%";
       imageDisplay.style.height = "50%";
       imageDisplay.style.left = "40$";

       startButton.style.display = "none";
       restartButton.style.display = "";
	     timesPlayed = timesPlayed +1;
	   //console.log("Times Played:" + timesPlayed);
       }
   }
   //console.log("Times Played:" + timesPlayed);
   restartButton.onclick = startDraw; //restart the process



}
