import './App.css'
import Player from './Player/Player'
import { useState, useEffect } from 'react'

function App() {
  const [activePlayer, setActivePlayer] = useState(1)
  const [score, setScore] = useState([0, 0])
  const [current, setCurrent] = useState(0)
  const [diceNumber, setDiceNumber] = useState(null)

  const handleNewGame = () => {
    setActivePlayer(1)
    setScore([0, 0])
    setCurrent(0)
    setDiceNumber(0)
  }

  const handleRollDice = () => {
    setDiceNumber(Math.trunc(Math.random() * 6) + 1)
  }

  useEffect(() => {
    if (diceNumber === 1) {
      setActivePlayer((activePlayer) => (activePlayer === 1 ? 2 : 1))
      setCurrent(0)
    } else {
      setCurrent((current) => current + diceNumber)
    }
  }, [diceNumber])

  const handleHold = () => {
    const newScore = [...score]
    newScore[activePlayer - 1] += current
    setScore(newScore)
    setActivePlayer(activePlayer === 1 ? 2 : 1)
    setCurrent(0)
  }

  const endGame = Math.max(...score) >= 100 ? true : false

  return (
    <main>
      <Player
        name={'Player 1'}
        score={score[0]}
        current={activePlayer === 1 && current}
        isActive={activePlayer === 1}
      />
      <Player
        name={'Player 2'}
        score={score[1]}
        current={activePlayer === 2 && current}
        isActive={activePlayer === 2}
      />
      {diceNumber && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New game
      </button>
      <button
        className="btn btn--roll"
        onClick={handleRollDice}
        disabled={endGame}
      >
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold} disabled={endGame}>
        📥 Hold
      </button>
    </main>
  )
}

export default App
