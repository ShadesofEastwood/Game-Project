console.log("ZA WARUDO");

/* The flashCard class will be used to create keys that correspond to the flash cards keyword and its defintion. Using this.key we can populate the modal easily.*/

class flashCard {
    constructor(keyword, definition) {
      this.keyword = keyword;
      this.definition = definition;
      this.value = "incorrect";
    }
  }
  
  /* These are where the flashcards are created and stored into an array for easy access. */
  
    theHermit = new flashCard("The Hermit", "Hermit Purple is the Stand of Joseph Joestar. It is a Close-Range Stand.")

    theStar = new flashCard("The Star", "Star Platinum is the Stand of Jotaro Kujo. It is a Close-Range Stand.")

    theChariot = new flashCard("The Chariot", "Silver Chariot is the Stand of Jean Pierre Polnareff. It is a Close-Range Stand.")

    theHierophant = new flashCard("The Hierophant", "Hierophant Green is the Stand of Noriaki Kakyoin. It is a Long-Distance Stand.")

    theMagician = new flashCard("The Magician", "Magician's Red is the Stand of Muhammad Avdol. It is a Close-Range Stand.")

    theFool = new flashCard("The Fool", "The Fool is the Stand of Iggy. It is a Close-Range Stand.")
  
  
  deck1 = [theHermit,theStar,theChariot,theHierophant,theFool,theMagician]
  deck2 = []
  deck3 = []

/* These DOM manipulation are for opening the modal and loading the modal with content fom our arrays. */

document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
  startGame();
});

function startGame() {
  document.getElementById("modal-content").innerText = `${
    deck1[deck1.length - 1].keyword
  }`;
}



/* This section below is how the user can operate the flash cards. Either switching to the next one or marking the flash card correct or incorrect.*/

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      console.log("Left key is pressed.");
      document.getElementById("modal-content").innerText = deck1[deck1.length -1].keyword
      break;
    case 38:
      console.log("Up key is pressed.");
      deck1[deck1.length -1].value = "correct"
      break;
    case 39:
      console.log("Right key is pressed.")
      document.getElementById("modal-content").innerText = deck1[deck1.length -1].definition;
      break;
    case 40:
      console.log("Down key is pressed.");
      deck1.pop()
      document.getElementById("modal-content").innerText = deck1[deck1.length -1].keyword
      break;
      
  }
};

/*The myTimer function is for keeping track of how long the user takes to complete the flashcards. It adds 1 to a number variable and then using DOM manipulation, places that new number into the document every second.*/

var timer = setInterval(myTimer,1000)

var seconds = 0
var minutes = 0

document.getElementById("timer").innerText = `Timer: ${minutes} minutes and ${seconds} seconds`

function myTimer(){
   seconds = seconds + 1

   if (seconds >= 60) {
       minutes = minutes + 1
       seconds = 0
   }
   
   document.getElementById("timer").innerText = `Timer: ${minutes} minutes and ${seconds} seconds`


}

myTimer()