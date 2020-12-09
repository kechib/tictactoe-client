const store = require('../store')

const onStartGameSuccess = function (response) {
  $('message').text('New Game Started!')
  store.game = response.game
$('#change-password').hide()
}
const onStartGameFailure = function (error) {
  $('message').text('New Game **Not** Started, Here is your error: ' + error.message)
}

module.exports = {
  onStartGameSuccess,
  onStartGameFailure
}
