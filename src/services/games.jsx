import axios from 'axios'

const sportotoUrl = 'http://localhost:3001/api/sportoto'

const getSportotoGames = () => {
  return axios.get(sportotoUrl)
}

export default {
  getSportotoGames
}
