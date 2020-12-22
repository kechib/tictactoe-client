const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields')

// const playerX = 'X'
// const playerO = 'O'

const onStartGame = function (event) {


  const startGame = event.target

  event.preventDefault()

  const data = getFormFields(startGame)
api.startGame(data)
.then(ui.onStartGameSuccess)
.catch(ui.onStartGameFailure)
}

const onTicTacToeBoardClick = function (event) {
  event.preventDefault()
  // const userPlayer1 = playerX
  // const userPlayer2 = playerY

  // event.target is the click
  const move = event.target
  const data = getFormFields(move)
  let userPlayer = store.userSymbol
  // console.log(store.game)
  // console.log(event)

  const cellsIndex = $(move).data('cell-index')
  const clickedOnBox = store.game.cells
const positionOfGame = clickedOnBox[cellsIndex]
 // console.log(clickedOnBox)
 // console.log(store.game.cells)
// console.log(data)
  if (positionOfGame === '')  {
    clickedOnBox[cellsIndex] = userPlayer
      $(move).html(userPlayer)
      let isOver = false




  // $(move).html(userPlayer)
  if (userPlayer === 'x' ){

    $('#message').text('Nice move! ' + userPlayer + ' turn is now over')
   store.userSymbol = 'o'

}
 else if (userPlayer === 'o') {

  $('#message').text('Nice move! ' + userPlayer + ' turn is now over')
  store.userSymbol = 'x'

}
api.onClickedBox(cellsIndex, userPlayer, isGameOver())
.then(ui.onClickedBoxSuccess)
.catch(ui.onClickedBoxFailure)
}
 else {
    $('#message').text('Spot is taken, please try again')


}

}
const isGameOver = function () {
  store.game.over = false
let isOver = store.game.over
const gameCells = store.game.cells


    if (gameCells[0] === gameCells[1] && gameCells[0] === gameCells[2] && gameCells[0] !== '') {
      isOver = true

    } else if (gameCells[3] === gameCells[4] && gameCells[3] === gameCells[5] && gameCells[3] !== '') {
      isOver = true

    } else if (gameCells[6] === gameCells[7] && gameCells[6] === gameCells[8] && gameCells[6] !== '') {
      isOver = true

    } else if (gameCells[0] === gameCells[3] && gameCells[0] === gameCells[6] && gameCells[0] !== '') {
      isOver = true

    } else if (gameCells[1] === gameCells[4] && gameCells[1] === gameCells[7] && gameCells[1] !== '') {
      isOver = true

    } else if (gameCells[2] === gameCells[5] && gameCells[2] === gameCells[8] && gameCells[2] !== '') {
      isOver = true

    } else if (gameCells[0] === gameCells[4] && gameCells[0] === gameCells[8] && gameCells[0] !== '') {
      isOver = true

    } else if (gameCells[2] === gameCells[4] && gameCells[2] === gameCells[6] && gameCells[2] !== '') {
      isOver = true

    }
   else if (gameCells[0] !== '' && gameCells[1] !== '' && gameCells[2] !== '' && gameCells[3] !== '' && gameCells[4] !== '' && gameCells[5] !== '' && gameCells[6] !== '' && gameCells[7] !== '' && gameCells[8] !== '') {
       $('#message').text('Only losers here, we have a tie!')
       isOver = false
     }

    if (isOver === true) {

      // $('#tictactoe-board div').off('click')
      return isOver

}
  }

// const onGetAGame = function (event) {
//   const game = event.target.id
//   event.preventDefault()
//   const data = getFormFields(game)
// api.getGame()
// .then(ui.onGetGameSuccess)
// .catch(ui.onGetGameFailure)
// }





const onNumberOfGamesPlayed = function (event) {
event.preventDefault()
  api.numberOfGamesPlayed()
.then(ui.onNumberOfGamesPlayedSuccess)
.catch(ui.onNumberOfGamesPlayedFailure)
}








module.exports = {
onTicTacToeBoardClick,
onStartGame,
// onGetAGame,
onNumberOfGamesPlayed

}
