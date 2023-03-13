// APP STATE (varaibles)
// players choices (a vritual representation of the gameboard)
let gameboard = ['X', 'X', 'X', '', '', '', '', '', '']
// whose turn it is (is it x or o)
let currentPlayer = 'X'
// a boolean value that tells you if the game is currently running
let gameIsActive = true
// (optional) a turn counter that is used to detect cats games when it reaches 9
let elapsedTurns = 0
// (bonus) -- how many times each player has won

const winningCombos = [
    [0, 1, 2], // i = 0, j = 0, j = 1, j =2
    [3, 4, 5], // i = 1, j = 0, j = 1, j =2
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

console.log('2d array:', winningCombos[2][0])

// DOM SELECTORS
const gameboardDiv = document.querySelector("#gameboard")
const messageAreaParagraph = document.querySelector("#messageArea")
const resetButton = document.querySelector("#resetButton")

// FUNCTIONS
// a click on the reset button
const handleResetButtonClick = function() {
    // manually reset all values in app state to their original values
    gameboard = ['', '', '', '', '', '', '', '', '']
    currentPlayer = 'X'
    gameIsActive = true
    elapsedTurns = 0
    // reset html values
    messageAreaParagraph.innerText = 'Player X, make your move'
    const squares = document.querySelectorAll(".square")
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = ''
    }
}
// DRY = do not repeat yourself

const checkWin = function() {
    for (let i = 0; i < winningCombos.length; i++) {
        let foundWinner = true
        for (let j = 0; j < winningCombos[i].length; j++) {
            const gameboardIndex = winningCombos[i][j]
            if (gameboard[gameboardIndex] !== currentPlayer) {
                foundWinner = false
                break
            }
        }
        // if we make it here and found winner is still true, the currentPlayer has won!
        if(foundWinner) {
            return true
        }
    } 
    // if we make it to the bottom out of the loops, nobody has won
    return false
}

// event listener for when you click on the gameboard
const handleGameboardClick = function(e) {
    console.log(`player just clicked on square number ${e.target.id}`)
    if (gameboard[e.target.id] === '' && gameIsActive) {
        // set the innertext of the square that got clicked on of whose turn it currently it
        e.target.innerText = currentPlayer
        // track the player in the array
        gameboard[e.target.id] = currentPlayer
        elapsedTurns++
        console.log(elapsedTurns)
        // if 9 turns have passed, we know its a cats game
        if (elapsedTurns === 9) {
            console.log("cats game!")
            messageAreaParagraph.innerText = "It's a cats game! Try again!"
        // if its not a cats game, we should check for a winner
        } else if(checkWin()) {
            // stop gameplay
            gameIsActive = false
            // set a message that the current player has won
            messageAreaParagraph.innerText = `${currentPlayer} has won! WOOO ${currentPlayer}!`
        } else {
            // if no one has won, we should let game continue
            // swtich turns
            // ternary = condition ? expression if true : expression if false
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
            // after we change to the next player's turn, lets inform them to go!
            messageAreaParagraph.innerText = `Player ${currentPlayer}, make your move!`
        }
    }
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