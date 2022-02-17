console.log("ZA WARUDO");

/* Using questions as a class object to tie the correct answer and images to what will be used to populate the modal.*/

class questions {
    constructor(question, answer1,answer2,answer3,answer4,key) {
      this.question = question
      this.answer1 = answer1
      this.answer2 = answer2
        this.answer3 = answer3
        this.answer4 = answer4
        this.key = key
    }
  }
  
  /* These are where the questions and images are created and stored into an array for easy access. */

  /* QUESTION 01 */

  const starplatinumImage = document.createElement('img')

  const anubisImage = document.createElement('img')

  const darkbluemoonImage = document.createElement('img')

  const deathImage = document.createElement('img')

  const starplatinumstatsImage = document.createElement('img')

  starplatinumImage.src= "images/starPlatinum.png"

  anubisImage.src = "images/anubisStats.png"

  darkbluemoonImage.src = "images/darkbluemoonStats.png"

  deathImage.src = "images/deathStats.png"

  starplatinumstatsImage.src = "images/starplatinumStats.png"

  starplatinumImage.style.height = "240px"
  starplatinumImage.style.width = "200px"
  
  anubisImage.style.height = "150px"
  anubisImage.style.width = "150px"

  darkbluemoonImage.style.height = "150px"
  darkbluemoonImage.style.height = "150px"

  deathImage.style.height = "150px"
  deathImage.style.width = "150px"

  starplatinumstatsImage.style.height = "150px"
  starplatinumstatsImage.style.width = "150px"

  question1 = new questions(starplatinumImage, anubisImage,darkbluemoonImage,deathImage,starplatinumstatsImage, 4)

  /* QUESTION 02 */

  const hermitpurpleImage = document.createElement('img')

  const ebonydevilImage = document.createElement('img')

  const emperorImage = document.createElement('img')

  const empressImage = document.createElement('img')

  const hermitpurplestatsImage = document.createElement('img')

  hermitpurpleImage.src = "images/hermitPurple.png"

  ebonydevilImage.src = "images/ebonydevilStats.png"

  emperorImage.src = "images/emperorStats.png"

  empressImage.src = "images/empressStats.png"

  hermitpurplestatsImage.src = "images/hermitpurpleStats.png"

  hermitpurpleImage.style.height = "260px"
  hermitpurpleImage.style.width = "230px"

  ebonydevilImage.style.height = "150px"
  ebonydevilImage.style.width = "150px"

  emperorImage.style.height = "150px"
  emperorImage.style.width = "150px"

  empressImage.style.height = "150px"
  empressImage.style.width = "150px"

  hermitpurplestatsImage.style.height = "150px"
  hermitpurplestatsImage.style.width = "150px"

  question2 = new questions(hermitpurpleImage,ebonydevilImage,hermitpurplestatsImage,emperorImage,empressImage, 2)

  const hierophantgreenImage = document.createElement('img')

  const hangedmanImage = document.createElement('img')

  const highpriestessImage = document.createElement('img')

  const hierophantgreenstatsImage = document.createElement('img')

  const gebImage = document.createElement('img')

  hierophantgreenImage.src = "images/hierophantGreen.png"

  hangedmanImage.src = "images/hangedmanStats.png"

  highpriestessImage.src = "images/highpriestessStats.png"

  hierophantgreenstatsImage.src = "images/hierophantgreenStats.png"

  gebImage.src = "images/gebStats.png"

  hierophantgreenImage.style.height = "240px"
  hierophantgreenImage.style.width = "200px"

  hangedmanImage.style.height = "150px"
  hangedmanImage.style.width = "150px"

  highpriestessImage.style.height = "150px"
  highpriestessImage.style.width = "150px"

  hierophantgreenstatsImage.style.height = "150px"
  hierophantgreenstatsImage.style.width = "150px"

  gebImage.style.height = "150px"
  gebImage.style.width = "150px"

  question3 = new questions(hierophantgreenImage, hierophantgreenstatsImage,highpriestessImage,gebImage,hangedmanImage,1)

const magiciansredImage = document.createElement('img')

  const judgementImage = document.createElement('img')

  const justiceImage = document.createElement('img')

  const magiciansredstatsImage = document.createElement('img')

  const khnumImage = document.createElement('img')

  magiciansredImage.src = "images/magiciansRed.png"

  judgementImage.src = "images/judgementStats.png"

  justiceImage.src = "images/justiceStats.png"

  magiciansredstatsImage.src = "images/magiciansredStats.png"

  khnumImage.src = "images/khnumStats.png"

  magiciansredImage.style.height = "240px"
  magiciansredImage.style.width = "200px"

  judgementImage.style.height = "150px"
  judgementImage.style.width = "150px"

  justiceImage.style.height = "150px"
  justiceImage.style.width = "150px"

  magiciansredstatsImage.style.height = "150px"
  magiciansredstatsImage.style.width = "150px"

  khnumImage.style.height = "150px"
  khnumImage.style.width = "150px"

  question4 = new questions(magiciansredImage, khnumImage, justiceImage, magiciansredstatsImage, judgementImage,3)

silverchariotImage = document.createElement('img')

silverchariotstatsImage = document.createElement('img')

loversImage = document.createElement('img')

strengthImage = document.createElement('img')

sunImage = document.createElement('img')

silverchariotImage.src = "images/silverChariot.png"

silverchariotstatsImage.src = "images/silverchariotStats.png"

loversImage.src = "images/loversStats.png"

strengthImage.src = "images/strengthStats.png"

sunImage.src = "images/thesunStats.png"

silverchariotImage.style.height = "240px"
silverchariotImage.style.width = "220px"

silverchariotstatsImage.style.height = "150px"
silverchariotstatsImage.style.width = "150px"

loversImage.style.height = "150px"
loversImage.style.width = "150px"

strengthImage.style.height = "150px"
strengthImage.style. width = "150px"

sunImage.style.height = "150px"
sunImage.style.width = "150px"

question5 = new questions(silverchariotImage, silverchariotstatsImage, loversImage, strengthImage, sunImage, 1)

  questionArray = [question1,question2,question3,question4,question5]

/* These DOM manipulation are for opening the modal and loading the modal with content fom our arrays. */

var seconds = 0
var minutes = 0

document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
  populate();

  var timer = setInterval(myTimer,1000)



document.getElementById("timer").innerText = `Timer: ${minutes} minutes and ${seconds} seconds`

function myTimer(){
   seconds = seconds + 1

   if (seconds >= 60) {
       minutes = minutes + 1
       seconds = 0
   }
   document.getElementById("timer").innerText = `Timer: ${minutes} minutes and ${seconds} seconds`

}
  
});

function populate() {
    document.getElementById('question').appendChild(questionArray[questionArray.length - 1].question)

    document.getElementById("option1").appendChild(questionArray[questionArray.length - 1].answer1)

    document.getElementById("option2").appendChild(questionArray[questionArray.length - 1].answer2)

    document.getElementById("option3").appendChild(questionArray[questionArray.length - 1].answer3)

    document.getElementById("option4").appendChild(questionArray[questionArray.length - 1].answer4)

}

/* This section below is how the user can operate the flash cards. Either switching to the next one or marking the flash card correct or incorrect.*/

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      console.log("Left key is pressed.");
    
      
      break;
    case 38:
      console.log("Up key is pressed.");
  
      break;
    case 39:
      console.log("Right key is pressed.")

      if (questionArray.length > 1) {
      questionArray.pop()
      clearBox("question")
      clearBox("option1")
      clearBox("option2")
      clearBox("option3")
      clearBox("option4")
      populate()
      } else {
        console.log("finished")
        document.getElementById("modal").style.display = "none"
        console.log(`${minutes} minutes and ${seconds} seconds`)
      }
    
      break;
    case 40:
      console.log("Down key is pressed.");
    
      break;
      
  }
};

/* Below is for creating eventlisteners to select a choice for the questions. */

document.getElementById("option1").addEventListener("click", function () {
if (questionArray[questionArray.length - 1].key !== 1) {
  alert("Incorrect!")
} else { alert("Correct!")}
})

document.getElementById("option2").addEventListener("click", function () {
  if (questionArray[questionArray.length - 1].key !== 2) {
    alert("Incorrect!")
  } else { alert("Correct!")}
  })
  
  document.getElementById("option3").addEventListener("click", function () {
    if (questionArray[questionArray.length - 1].key !== 3) {
      alert("Incorrect!")
    } else { alert("Correct!")}
    })
    
    document.getElementById("option4").addEventListener("click", function () {
      if (questionArray[questionArray.length - 1].key !== 4) {
        alert("Incorrect!")
      } else { alert("Correct!")}
      })
      





/*The myTimer function is for keeping track of how long the user takes to complete the flashcards. It adds 1 to a number variable and then using DOM manipulation, places that new number into the document every second.*/





/* The code below is for opening and closing the gallery. */

