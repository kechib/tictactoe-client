const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Sign Up Successful!')
}

const onSignUpFailure = function (error) {
  $('#message').text('Sign Up Failed! Here is your error: ' + error.message)
}

module.exports = {
onSignUpSuccess,
onSignUpFailure
}
