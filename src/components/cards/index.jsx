import { useEffect, useState } from 'react'
import { Card } from '../card'
import * as S from './style'

const Cards = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/MarcioBADias/hcMocAPI/main/hcMocAPI.json',
    )
      .then((r) => r.json())
      .then((data) => setCards(data))
      .catch(console.log)
  }, [cards])

  return (
    <S.Cards>
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          img={card.img}
          collection={card.collection}
        />
      ))}
    </S.Cards>
  )
}

export { Cards }
