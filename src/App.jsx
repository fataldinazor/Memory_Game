import { useState } from 'react'
import './App.css'
import GameList from './components/GameList'
import Header from './components/Header'

function App() {
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [bestScore, setBestScore] = useState(score)

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <GameList
        setScore={setScore}
        score={score}
        gameOver={gameOver}
        setGameOver={setGameOver}
        setGameWon={setGameWon}
        gameWon={gameWon}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
      <footer>
        {new Date().getFullYear()}. All Rights Reserved. Memory Game
      </footer>
    </div>
  )
}

export default App
