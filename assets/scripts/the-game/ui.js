const store = require('../store')

const onStartGameSuccess = function (response) {
$('message').text('New Game Started!')
$('.game-details').show()
store.game = response.game
// console.log(response.game)
store.userSymbol = 'x'
}
const onStartGameFailure = function (error) {
  $('#message').text('New Game **Not** Started, Here is your error: ' + error.message)
}

const onGetGameSuccess = function (response) {
  $('#message').text('Here is your game!')
   store.games = response.games
   console.log(response.games)
  let gamesHTML = ''
  store.games.forEach(function (currentGame) {
    const currentGameHTML = (`
          <div>
            <h4>Owner: ${currentGame.owner}</h4>
            <p>CreatedOn: ${currentGame.createdAt}</p>
            <p>ID: ${currentGame._id}</p>
          </div>
        `)
    gamesHTML += currentGameHTML
  })
  $('#game-display').html(gamesHTML)
}

const onGetGameFailure = function (error) {
  $('message').text('Could not get game, here is your error ' + error.message)
}

const onNumberOfGamesPlayedSuccess = function (response) {
$('message').text('Here is how many games you played! ' + response.game)
}

const onNumberOfGamesPlayedFailure = function (error) {
  $('message').text('Could not get the number of games, here is your error ' + error.message)
}

const onClickedBoxSuccess = function (response) {
  $('message').text('Nice move!')
  store.game = response.game
  if (store.game.over === true) {
    $('#message').text('You are the winner mon!')
  }
  console.log(response.game)
}
const onClickedBoxFailure = function (error) {
  $('message').text('Move not available, here is your error ' + error.message)
}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure,
  onGetGameSuccess,
  onGetGameFailure,
  onNumberOfGamesPlayedSuccess,
  onNumberOfGamesPlayedFailure,
  onClickedBoxSuccess,
  onClickedBoxFailure

}
