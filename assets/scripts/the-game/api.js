const config = require('./../config')
const store = require('./../store')


const startGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {},
  })
}

// const getGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${store.user.token}`
//      }
//   })
// }
const numberOfGamesPlayed = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
    Authorization: 'Bearer ' + store.user.token
    }
    })
  }



const onClickedBox = function (cellsIndex, userPlayer, isOver) {
console.log(store)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
    game: {
      cell: {
        index: cellsIndex,
        value: userPlayer,
      },
      over: isOver
    }
    }
  })
}

module.exports = {
startGame,
// getGame,
numberOfGamesPlayed,
onClickedBox
}
