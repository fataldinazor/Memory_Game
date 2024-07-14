import '../styles/Header.css'
import pokemonTitle from "../assets/pokemonTitle.png"

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
      <div className="title" onClick={()=>window.location.reload()}>
        <img className="pokemonLogo" src={pokemonTitle} alt="pokemon_logo" />
        <div>Memory Game</div>
        </div>
      <Scores score={score} bestScore={bestScore} />
    </div>
  )
}
