import './App.css'
import Player from './Player/Index'
import { useState } from 'react'

function App() {
  const [activePlayer, setActivePlayer] = useState(0)
  const [score, setScore] = useState([0, 0])
  const [current, setCurrent] = useState(0)
  const [diceNumber, setDiceNumber] = useState(3)

  const handleNewGame = () => {
    activePlayer = true
    score = 0
    current = 0
  }

  const handleRollDice = () => rollDice()

  const handleHold = () => {}

  const rollDice = () => {
    const num = Math.trunc(Math.random() * 6) + 1
    return '../public/dice-{`num`}.png'
  }

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
      <button className="btn btn--roll" onClick={handleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  )
}

export default App
