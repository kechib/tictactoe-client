const config = require('./../config')
const store = require('./../store')

const signUp = function (Data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: Data
  })
}

module.exports = {
  signUp
}
