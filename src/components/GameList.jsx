import { useState, useEffect } from 'react'
import '../styles/GameList.css'
import loadingIcon from '../assets/loading.svg'

export default function GameList({
  setScore,
  score,
  gameOver,
  setGameOver,
  setGameWon,
  gameWon,
  bestScore,
  setBestScore,
}) {
  const [cards, setCards] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [set, setSet] = useState(() => new Set())

  const characters = [
    'pikachu',
    'charmander',
    'bulbasaur',
    'squirtle',
    'jigglypuff',
    'meowth',
    'psyduck',
    'eevee',
    'snorlax',
    'gengar',
    'mewtwo',
    'charizard',
  ]

  async function fetchData() {
    try {
      const fetchPromises = characters.map((name) =>
        fetch('https://pokeapi.co/api/v2/pokemon-form/' + name).then((res) =>
          res.json(),
        ),
      )
      const results = await Promise.all(fetchPromises)

      const cardsData = results.map((data) => ({
        id: data.id,
        title: data.name,
        src: data.sprites.front_shiny,
      }))
      jumbleCards(cardsData)
    } catch (err) {
      setError(err)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  function jumbleCards(cards) {
    const shuffleCards = [...cards]
    for (let i = shuffleCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffleCards[i], shuffleCards[j]] = [shuffleCards[j], shuffleCards[i]]
    }
    setCards(shuffleCards)
  }

  function checkDuplicate(id) {
    if (set.has(id)) return true
    setSet((prev) => new Set(prev).add(id))
    return false
  }

  function handleCardClick(id) {
    if (checkDuplicate(id)) {
      setGameOver(true)
    } else {
      setScore((prev) => prev + 1)
      if (score === cards.length) setGameWon(true)
      jumbleCards(cards)
    }
  }

  function capitalizeTheFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function resetGame() {
    if (bestScore < score) setBestScore(score)
    setScore(0)
    setSet(() => new Set())
    setGameOver(false)
    setGameWon(false)
  }

  function GameOver({ score }) {
    return (
      <div className="overlay">
        <dialog open>
          <div>Game Over!😔</div>
          <p>Your Score was {score}</p>
          <button onClick={() => resetGame()}>Play Again</button>
        </dialog>
      </div>
    )
  }
  if (loading)
    return <img className="loadingSVG" src={loadingIcon} alt="loading Icon" />
  function GameWon() {
    return (
      <div className="overlay">
        <dialog open>
          <div>Congratulations🎉</div>
          <p>You have won the game</p>
          <button onClick={() => resetGame()}>Play Again</button>
        </dialog>
      </div>
    )
  }

  return (
    <div className="cardList">
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            className="card"
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.src} alt="characterImage" />
            <div className="characterName">
              {capitalizeTheFirstLetter(card.title)}
            </div>
          </div>
        )
      })}
      {gameOver && <GameOver score={score} />}
      {gameWon && <GameWon />}
    </div>
  )
}
