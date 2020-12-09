const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Sign Up Successful!')
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('form').trigger('reset')
}

const onSignUpFailure = function (error) {
  $('#message').text('Sign Up Failed! Here is your error: ' + error.message)
}
const onSignInSuccess = function (response) {
  $('#message').text('Sign In Successful!')
  store.user = response.user
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('#sign-out').show()
}

const onSignInFailure = function (error) {
  $('#message').text('Sign In Failed! Here is your error: ' + error.message)
$('#change-password').show()
}
const onChangePasswordSuccess = function (response) {
  $('#message').text('Password Changed!')
}
const onChangePasswordFailure = function (error) {
  $('#message').text('Sign In Failed! Here is your error: ' + error.message)
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out. Goodbye!')

  $('.authenticated').hide()
  $('.unauthenticated').show()
  store.user = null
  $('form').trigger('reset')
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed: ' + error.message)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
