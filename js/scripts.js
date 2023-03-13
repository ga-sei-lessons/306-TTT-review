// APP STATE (varaibles)
// players choices (a vritual representation of the gameboard)
let gameboard = ['', '', '', '', '', '', '', '', '']
// whose turn it is (is it x or o)
let currentPlayer = 'X'
// a boolean value that tells you if the game is currently running
let gameIsActive = true
// (optional) a turn counter that is used to detect cats games when it reaches 9
let elapsedTurns = 0
// (bonus) -- how many times each player has won

// DOM SELECTORS
const gameboardDiv = document.querySelector("#gameboard")
const messageAreaParagraph = document.querySelector("#messageArea")
const resetButton = document.querySelector("#resetButton")

// FUNCTIONS
// a click on the reset button
const handleResetButtonClick = function() {
    console.log("the reset button has been clicked!")
}

// event listener for when you click on the gameboard
const handleGameboardClick = function(e) {
    console.log(`player just clicked on square number ${e.target.id}`)
    // when a square is clicked we should do the following:
    // set the innertext of the square that got clicked on of whose turn it currently it
    e.target.innerText = currentPlayer
    // track the player in the array
    gameboard[e.target.id] = currentPlayer
    console.log(gameboard)
    // swtich turns
    // ternary = condition ? expression if true : expression if false
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    // prevent repeat clicks -- check the gameboard array or check the innertext
    // set the move into the gameboard array 
    // check if there is a winner
        // if someone has won, end the game and updated the message for who has won
            // think about all the conditions to win the game and check for all of them
        // check for cats game
            // if every square is an x or an o and no one has won   
            // or count turns    
        // if no one has won, let gameplay continue (switch turns)
}

// EVENT LISTENERS
gameboardDiv.addEventListener("click", handleGameboardClick)
resetButton.addEventListener("click", handleResetButtonClick)