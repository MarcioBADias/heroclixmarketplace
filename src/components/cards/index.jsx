import { useEffect, useState } from 'react'
import { Card } from '../card'
import * as S from './style'

const base_prices = import.meta.env.VITE_API_COOLSTUFF_PRICES
const pathImage = import.meta.env.VITE_PATH_HCREALMS_IMG

const Cards = ({ searchTerm, selectedCollection }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(base_prices)
      .then((r) => r.json())
      .then((data) => setCards(data))
      .catch(console.log)
  }, [])

  const filteredCards = cards.filter((card) => {
    const matchesSearch =
      card.CharacterName.toLowerCase() == searchTerm.toLowerCase()
    const matchesCollection = selectedCollection
      ? card.collection === selectedCollection
      : true
    return matchesSearch && matchesCollection
  })

  return (
    <S.Cards>
      {cards.map((card) => (
        <Card
          key={card.collection}
          name={card.CharacterName}
          img={`${pathImage}${card.collection}${card.SerialNumber}.jpg`}
          collection={card.collection}
          price={card.Price}
        />
      ))}
    </S.Cards>
  )
}

export { Cards }
