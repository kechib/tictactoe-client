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
  // const clickedBox = event.target.id
  const move = event.target
  const data = getFormFields(move)
  let userPlayer = store.userSymbol
  // console.log(store.game)
  // console.log(event)

  const cellsIndex = $(move).data('cell-index')
  const clickedOnBox = store.game.cells
const positionOfGame = clickedOnBox[cellsIndex]
console.log(clickedOnBox)
console.log(data)
  if (positionOfGame === '')  {
      $(move).html(userPlayer)
      let isOver = false
      api.onClickedBox(cellsIndex, userPlayer, isOver)
      .then(ui.onClickedBoxSuccess)
      .catch(ui.onClickedBoxFailure)



  $(move).html(userPlayer)
  if (userPlayer === 'x' ){

    $('#message').text('Nice move! turn is now over')
   store.userSymbol = 'o'

}
 else if (userPlayer === 'o') {

  $('#message').text('Nice move! turn is now over')
  store.userSymbol = 'x'

}
}
 else {
    $('#message').text('Spot is taken, please try again')
}


// if (store.game.cellsIndex[0] === userPlayer) &&
//  (store.game.cellsIndex[1] === userPlayer) &&
//  (store.game.cellsIndex[2] === userPlayer) {
//    isOver = true
//  }
// if (store.game.cellsIndex[0] === userPlayer) &&
//  (store.game.cellsIndex[3] === userPlayer) &&
//  (store.game.cellsIndex[6] === userPlayer) {
//    isOver = true
//  }
// if (store.game.cellsIndex[0] === userPlayer) &&
//  (store.game.cellsIndex[4] === userPlayer) &&
//  (store.game.cellsIndex[8] === userPlayer) {
//    isOver = true
//  }
// if (store.game.cellsIndex[2] === userPlayer) &&
//  (store.game.cellsIndex[5] === userPlayer) &&
//  (store.game.cellsIndex[8] === userPlayer) {
//    isOver = true
//  }
// if (store.game.cellsIndex[1] === userPlayer) &&
//  (store.game.cellsIndex[4] === userPlayer) &&
//  (store.game.cellsIndex[7] === userPlayer) {
//    isOver = true
//  }
// if (store.game.cellsIndex[2] === userPlayer) &&
//  (store.game.cellsIndex[4] === userPlayer) &&
//  (store.game.cellsIndex[6] === userPlayer) {
//    isOver = true
//  }


}

const onGetAGame = function (event) {
  const game = event.target.id
  event.preventDefault()
  const data = getFormFields(game)
api.getGame()
.then(ui.onGetGameSuccess)
.catch(ui.onGetGameFailure)
}

const onNumberOfGamesPlayed = function (event) {
  const numOfGame = event.target.id
  event.preventDefault()
api.numberOfGamesPlayed()
.then(ui.onNumberOfGamesPlayedSuccess)
.catch(ui.onNumberOfGamesPlayedFailure)
}








module.exports = {
onTicTacToeBoardClick,
onStartGame,
onGetAGame,
onNumberOfGamesPlayed,

}
