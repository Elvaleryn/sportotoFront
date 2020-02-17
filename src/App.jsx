import React from 'react'
import gamesService from './services/games'
import { useState, useEffect } from 'react'

const App = () => {

  const [sportotoGames, setSportotoGames] = useState([])

  useEffect(() => {
    gamesService.getSportotoGames().then(response => {
      setSportotoGames(response.data)
    })
  }, [])

  let res1;
  let res2;
  
  const name = sportotoGames.map(function (game) {
    const random1 = Math.floor(Math.random() * 121)
    const random2 = Math.floor(Math.random() * 121)

    let ms1 = game.odds.map(o => 100/o.outcome)[0]
    let ms0 = game.odds.map(o => 100/o.outcome)[1]

    if (random1 < ms1) {
      res1 = 1;
    }
    else if (random1 > ms1 && random1 < (ms1 + ms0)) {
      res1 = 0;
    } else {
      res1 = 2;
    }
    if (random2 < ms1) {
      res2 = 1;
    } else if (random2 > ms1 && random2 < (ms1 + ms0)) {
      res2 = 0;
    } else {
      res2 = 2;
    }

    return <tr>
      <td>{game.name}</td>
      <td>{game.odds[0].outcome}</td>
      <td>{game.odds[1].outcome}</td>
      <td>{game.odds[2].outcome}</td>
      <td>{res1}</td>
      <td>{res2}</td>
    </tr>
  }
  )

  return (
    <div className="container">
      <table className="u-full-width">
        <thead>
          <tr>
            <td>Maç</td>
            <td>Ev Sahibi</td>
            <td>Beraberlik</td>
            <td>Deplasman</td>
            <td>Kura 1</td>
            <td>Kura 2</td>
          </tr>
        </thead>
        <tbody>
          {name}
        </tbody>
      </table>
    </div>
  )
}

export default App
