console.log("ZA WARUDO")

/* These DOM manipulations are for beginning the game. */

document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("modal").style.display = "block"
} )

/* The flashCard class will be used to create keys that correspond to the flash cards keyword and its defintion. Using this.key we can populate the modal easily.*/

class flashCard {
    constructor(keyword,definition) {
        this.keyword = keyword
        this.definition = definition
        this.value = "incorrect"
        this.populate = populate
    }
}

/* These are where the flashcards are created and stored into an array for easy access. */

George = new flashCard("George", "A curious monkey that lives in New York City.")

KingKong = new flashCard("King Kong", "A massive ape, king of the jungle.")

contentArray = [George,KingKong]

/* This section is the DOM manipulations that fill the modal with information from the array above*/

function populate () {
    console.log(this)
    document.getElementById("modal-content").innerText = `${this.keyword}`
}

contentArray[0].populate()

/* This section below is how the user can operate the flash cards. Either switching to the next one or marking the flash card correct or incorrect.*/



