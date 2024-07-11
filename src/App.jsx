import { useState } from 'react'
import './App.css'
import GameList from './components/GameList'
import Header from "./components/Header"

// const [scoreboard, setScoreboard]=useState({score:0, bestScore:0});


function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver]= useState(false);
  const [gameWon, setGameWon]= useState(false)
  const [reset, resetGame]= useState(false);
  return (
    <div className="app">
      <Header score={score}/>
      <GameList setScore={setScore} score={score} gameOver={gameOver} setGameOver={setGameOver} setGameWon={setGameWon} gameWon={gameWon} />
    </div>
  )
}

export default App
