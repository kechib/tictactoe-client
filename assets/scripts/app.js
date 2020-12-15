'use strict'
const theGameEvents = require('./the-game/events')
const userEvents = require('./user/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
$('.game-details').hide()
$('.board-cells').hide()
$('.step2').hide()
$('.step3').hide()
$('.start').show()
$('.started').hide()
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#start-game').on('click', theGameEvents.onStartGame)
  $('#tictactoe-board div').on('click', theGameEvents.onTicTacToeBoardClick)
  // $('#get-a-game').on('click', theGameEvents.onGetAGame)
  $('#games-played').on('click', theGameEvents.onNumberOfGamesPlayed)

})
