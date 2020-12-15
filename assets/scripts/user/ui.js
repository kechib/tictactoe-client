const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign Up Successful!')
}

const onSignUpFailure = function (error) {
  $('form').trigger('reset')
  $('#message').text('Sign Up Failed! Here is your error: ' + error.message)
}

const onSignInSuccess = function (response) {

  $('form').trigger('reset')
  store.user = response.user
  $('#message').text('Sign In Successful! Hello '+ response.user.email + ' !')
$('.step3').show()
$('.started').show()
$('.board-cells').show()
$('.step2').show()
$('.start').hide()

}

const onSignInFailure = function (error) {
  $('#message').text('Sign In Failed! Here is your error: ' + error.message)
  $('.step2').show()
$('form').trigger('reset')
}
const onChangePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password Changed!')
  $('.step3').show()
  $('.board-cells').show()
  $('.started').show()
}
const onChangePasswordFailure = function (error) {
  $('#message').text('Sign In Failed! Here is your error: ' + error.message)
  $('.start').show()
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out. Goodbye!')
  $('.step3').hide()
  $('.step2').hide()
  $('.board-cells').hide()
  $('.started').hide()
$('.game-details').hide()
$('.start').show()
  store.user = null
  $('form').trigger('reset')
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed: ' + error.message)
  $('form').trigger('reset')
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
