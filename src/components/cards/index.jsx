import { useEffect, useState } from 'react'
import { Card } from '../card'
import * as S from './style'

const base_praces = import.meta.env.VITE_API_COOLSTUFF_PRICES
const pathImage = import.meta.env.VITE_PATH_HCREALMS_IMG

const Cards = ({ searchTerm, selectedCollection }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(
      base_praces,
    )
      .then((r) => r.json())
      .then((data) => setCards(data))
      .catch(console.log)
  }, [])

  // Filtra os cards com base no nome e na coleção
  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.CharacterName.toLowerCase()== searchTerm.toLowerCase()
    const matchesCollection = selectedCollection ? card.collection === selectedCollection : true
    return matchesSearch && matchesCollection
  })

  return (
    <S.Cards>
      {filteredCards.map((card) => (
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
