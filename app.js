console.log("ZA WARUDO");

var gallery = "closed"
var seconds = 0
var minutes = 0
correctAnswers = 0
incorrectAnswers = 0



/* Using questions as a class object to connect the correct answer and images to what will be used to populate the modal.
*/

class questions {
    constructor(question, answer1,answer2,answer3,answer4,key,title,theme) {
      this.question = question
      this.answer1 = answer1
      this.answer2 = answer2
        this.answer3 = answer3
        this.answer4 = answer4
        this.key = key
        this.title = title
        this.theme = theme
    }
  }
  
  /* These are where the questions and images are created and stored into an array for easy access. */

  const statGuide = document.createElement('img')

  statGuide.src = "images/statsGuide.png"

  statGuide.style.height = "200px"
  statGuide.style.width = "200px"

  document.getElementById("question").addEventListener("click", function () {
document.getElementById("question").appendChild(statGuide)
  })

  /* Gallery Creation */

  galleryArray = []

  /* QUESTION 01 */

function question1Creation () {
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

  galleryArray.push(anubisImage,darkbluemoonImage,deathImage,starplatinumstatsImage)

  question1 = new questions(starplatinumImage, anubisImage,darkbluemoonImage,deathImage,starplatinumstatsImage, 4, "Star Platinum","slateblue")

}
question1Creation()
  
  /* QUESTION 02 */

  function question2Creation () {
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
    question2 = new questions(hermitpurpleImage,ebonydevilImage,hermitpurplestatsImage,emperorImage,empressImage, 2, "Hermit Purple","mediumvioletred")

    galleryArray.push(ebonydevilImage,emperorImage,empressImage,hermitpurplestatsImage)

  }
question2Creation()
 
  /* QUESTION 03 */

  function question3Creation () {

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
    question3 = new questions(hierophantgreenImage, hierophantgreenstatsImage,highpriestessImage,gebImage,hangedmanImage,1, "Hierophant Green","greenyellow")

    galleryArray.push(hangedmanImage,highpriestessImage,hierophantgreenstatsImage,gebImage)

  }
question3Creation()

/* QUESTION 04 */

function question4Creation () {
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
question4 = new questions(magiciansredImage, khnumImage, justiceImage, magiciansredstatsImage, judgementImage,3, "Magicians Red","indianred")

galleryArray.push(judgementImage,justiceImage,magiciansredstatsImage,khnumImage)

}
question4Creation()

  /* QUESTION 05 */

  function question5Creation () {
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
question5 = new questions(silverchariotImage, silverchariotstatsImage, loversImage, strengthImage, sunImage, 1, "Silver Chariot","aquamarine")

galleryArray.push(loversImage,strengthImage,sunImage,silverchariotstatsImage)
  }
question5Creation()


/* FINAL QUESTION ARRAY */

function arrayCreation() {
  questionArray = [question1,question2,question3,question4,question5]
}
arrayCreation()
  
/* These DOM manipulation are for opening the modal and loading the modal with content fom our arrays. It also is responsible for starting the timer that appears in the corner of the screen. This is because the timer begins when the game starts and begins to poulate the modal. */

document.getElementById("startButton").addEventListener("click", function () {
  alert("In JoJo's Bizarre Adventure, stands are manifestations of a persons soul. They have a series of statistics that are used to classify and determine a stands particular strengths and weaknesses. You must select the correct stat circle to the shown stand. Good luck!")

  statFilter.addEventListener("mousemove", handlemouseMove, true);

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
    document.getElementById("title").innerHTML = questionArray[questionArray.length - 1].title

    document.getElementById('question').appendChild(questionArray[questionArray.length - 1].question)

    document.getElementById("option1").appendChild(questionArray[questionArray.length - 1].answer1)

    document.getElementById("option2").appendChild(questionArray[questionArray.length - 1].answer2)

    document.getElementById("option3").appendChild(questionArray[questionArray.length - 1].answer3)

    document.getElementById("option4").appendChild(questionArray[questionArray.length - 1].answer4)

    document.getElementById("modal-content").style.backgroundColor = questionArray[questionArray.length - 1].theme

}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

/* The event listensers below are used to determine whether or not the user has selected the correct answer upon clicking an image. The functions are based on whether or not there is another question in the series. If there is not then the finals answers, time, and finish alert will be called instead of populating the modal with the next question. */

var option1 = document.getElementById("option1")
function handleoption1click() {
  if (questionArray[questionArray.length - 1].key !== 1) {
    alert("Incorrect!")
    incorrectAnswers = incorrectAnswers + 1
  } else { alert("Correct!")
  correctAnswers = correctAnswers +1
  }
  
  
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
      console.log(`You got ${correctAnswers} answers correct and ${incorrectAnswers} answers incorrect.`)
      document.getElementById("question").innerHTML = ""
    }
}
option1.addEventListener("click", handleoption1click, true)

var option2 = document.getElementById("option2")
function handleoption2click() {
  if (questionArray[questionArray.length - 1].key !== 2) {
    alert("Incorrect!")
    incorrectAnswers = incorrectAnswers + 1
  } else { alert("Correct!")
  correctAnswers = correctAnswers +1
}


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
    console.log(`You got ${correctAnswers} answers correct and ${incorrectAnswers} answers incorrect.`)
  }

}
option2.addEventListener("click",handleoption2click,true)
  
var option3 = document.getElementById("option3")
function handleoption3click () {
  if (questionArray[questionArray.length - 1].key !== 3) {
    alert("Incorrect!")
    incorrectAnswers = incorrectAnswers + 1
  } else { alert("Correct!")
  correctAnswers = correctAnswers +1
}


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
    console.log(`You got ${correctAnswers} answers correct and ${incorrectAnswers} answers incorrect.`)
  }

}
option3.addEventListener("click",handleoption3click,true)

var option4 = document.getElementById("option4")
function handleoption4click () {
  if (questionArray[questionArray.length - 1].key !== 4) {
    alert("Incorrect!")
    incorrectAnswers = incorrectAnswers + 1
  } else { alert("Correct!")
correctAnswers = correctAnswers +1
}


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
    console.log(`You got ${correctAnswers} answers correct and ${incorrectAnswers} answers incorrect.`)
  }
}
    option4.addEventListener("click",handleoption4click,true)
    
/* GALLERY FUNCTION */


document.getElementById("galleryButton").addEventListener("click", function () {

  statFilter.style.filter = "none"
  statFilter.removeEventListener("mousemove", handlemouseMove, true);  

  fullGallery = galleryArray

  document.getElementById("modal-content").style.backgroundColor = "white"

  gallery = "open"
  document.getElementById("question").innerHTML = ""


  option1.removeEventListener("click", handleoption1click, true)
  option2.removeEventListener("click", handleoption2click, true)
  option3.removeEventListener("click", handleoption3click, true)
  option4.removeEventListener("click", handleoption4click, true)


  document.getElementById("modal").style.display = "block"
  document.getElementById("title").innerHTML = ""
  document.getElementById("option1").innerHTML = ""
  document.getElementById("option2").innerHTML = ""
  document.getElementById("option3").innerHTML = ""
  document.getElementById("option4").innerHTML = ""

  document.getElementById("option1").style.gridColumn = "span 1/1"
  document.getElementById("option2").style.gridColumn = "span 1/2"
  document.getElementById("option3").style.gridColumn = "span 1/3"
  document.getElementById("option4").style.gridColumn = "span 1/4"
 
  for (i = 1; i <= 20; i++) {
    document.getElementById(`option${i}`).appendChild(galleryArray[galleryArray.length - i])
  }

document.getElementById("close").addEventListener("click", function () {
if (gallery == "open") {
  document.getElementById("modal").style.display = "none"


  option1.addEventListener("click", handleoption1click, true)
  option2.addEventListener("click", handleoption2click, true)
  option3.addEventListener("click", handleoption3click, true)
  option4.addEventListener("click", handleoption4click, true)



  document.getElementById("option1").innerHTML = "1"
  document.getElementById("option2").innerHTML = "2"
  document.getElementById("option3").innerHTML = "3"
  document.getElementById("option4").innerHTML = "4"

  for (i = 5; i <= 20; i++) {
    document.getElementById(`option${i}`).innerHTML = ""
  }

document.getElementById("option1").style.gridColumn = "span 2/2"
document.getElementById("option2").style.gridColumn = "span 2/4"
document.getElementById("option3").style.gridColumn = "span 2/2"
document.getElementById("option4").style.gridColumn = "span 2/4"


}

gallery = "closed"

})

})

/* Image Filter*/

const backgroundFilter = document.querySelector('img')

backgroundFilter.addEventListener("mousemove", (e) => {
 
    backgroundFilter.style.filter = `hue-rotate(${e.offsetX}deg)`
  
});

const statFilter = document.getElementById("modal-content")

function handlemouseMove(e) {
  statFilter.style.filter = `hue-rotate(${e.offsetX}deg)`
}
  statFilter.addEventListener("mousemove", handlemouseMove, true);




