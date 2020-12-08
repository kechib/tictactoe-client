const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
api.signUp(data)
.then(ui.onSignUpSuccess)
.catch(ui.onsignUpFailure)
}





module.exports = {}
