import { useEffect, useState } from 'react'
import { Card } from '../card'
import * as S from './style'

const Cards = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/MarcioBADias/data-fake/refs/heads/main/hc-prices-api.json',
    )
      .then((r) => r.json())
      .then((data) => setCards(data))
      .catch(console.log)
  }, [cards])

  return (
    <S.Cards>
      {cards.map((card) => (
        <Card
          key={card.collection}
          name={card.CharacterName}
          img={`https://www.hcrealms.com/units/${card.collection}${card.SerialNumber}.jpg`}
          collection={card.collection}
          price={card.Price}
        />
      ))}
    </S.Cards>
  )
}

export { Cards }
