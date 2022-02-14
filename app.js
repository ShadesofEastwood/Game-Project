console.log("ZA WARUDO");

/* These DOM manipulation for opening the modal. */

document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
  startGame();
});

function startGame() {
  document.getElementById("modal-content").innerText = `${
    contentArray[contentArray.length - 1].keyword
  }`;
}

/* The flashCard class will be used to create keys that correspond to the flash cards keyword and its defintion. Using this.key we can populate the modal easily.*/

class flashCard {
  constructor(keyword, definition) {
    this.keyword = keyword;
    this.definition = definition;
    this.value = "incorrect";
  }
}

/* These are where the flashcards are created and stored into an array for easy access. */



deck1 = []
deck2 = []
deck3 = []

/*
spiderMan = new flashCard("Spider-man", "Peter Parker");

ironMan = new flashCard("Iron Man", "Tony Stark");

thor = new flashCard("Thor", "Dr. Donald Blake")

hawkEye = new flashCard("Hawkeye", "Clint Barton")

blackWidow = new flashCard("Black Widow", "Natasha Roanov")

hulk = new flashCard("Hulk", "Bruce Banner")

captainAmerica = new flashCard("Captain America", "Steve Rogers")

*/

contentArray = [spiderMan, ironMan, thor, hawkEye, blackWidow, hulk, captainAmerica];

/* This section is the DOM manipulations that fill the modal with information from the array above*/

/* function populate () {
    console.log(this)
    if (this.value == "incorrect") {
        document.getElementById("modal-content").innerText = `${this.keyword}`
    }
    
}


contentArray[0].populate()
contentArray[1].populate() */

/* This section below is how the user can operate the flash cards. Either switching to the next one or marking the flash card correct or incorrect.*/

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      console.log("Left key is pressed.");
      document.getElementById("modal-content").innerText = contentArray[contentArray.length -1].keyword
      break;
    case 38:
      console.log("Up key is pressed.");
      contentArray[contentArray.length -1].value = "correct"
      break;
    case 39:
      console.log("Right key is pressed.")
      document.getElementById("modal-content").innerText = contentArray[contentArray.length -1].definition;
      break;
    case 40:
      console.log("Down key is pressed.");
      contentArray.pop()
      document.getElementById("modal-content").innerText = contentArray[contentArray.length -1].keyword
      break;
      
  }
};
