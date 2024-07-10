import { useState } from 'react'

export default function GameList() {
  const [cards, setCards] = useState([
    'pikachu and 11 other characters in this array',
  ])

  

  function jumbleCards() {
    const shuffleCards= [...cards];
    for(let i=shuffleCards.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [shuffleCards[i], shuffleCards[j]]=[shuffleCards[j], shuffleCards[i]];
    }
    setCards(shuffleCards);
  }

  return <div className="cardList"></div>
}
