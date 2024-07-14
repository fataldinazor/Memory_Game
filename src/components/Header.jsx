import '../styles/Header.css'

function Scores({ score, bestScore }) {
  return (
    <div className="scores">
      <div className="presentScore">Current Score: {score}</div>
      <div className="bestScore">Best Score: {bestScore}</div>
    </div>
  )
}

export default function Header({ score, bestScore }) {
  return (
    <div className="header">
      <div className="title">🧠Memory Game</div>
      <Scores score={score} bestScore={bestScore} />
    </div>
  )
}
