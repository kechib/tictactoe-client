const api = require('./api')
const ui = require('./ui')
let currentPlayer = 'X'
const gameBoardArray = ['','','','','','','','','']

const onStartGame = function(event) {
  const gameForm = event.target
api.startGame()
.then(ui.onStartGameSuccess)
.catch(ui.onStartGameFailure)
}

module.exports = {
onStartGame
}
