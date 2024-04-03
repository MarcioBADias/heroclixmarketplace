import { useEffect, useState } from 'react'

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
    <div className="cards">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.img} alt={`imagem de ${card.name}`} />
          <h2>{card.name}</h2>
          <span>{card.collection}</span>
          <ul className="prices">
            <li>
              <p className="price">R$ 00,00</p>
              <span className="price-type">Min</span>
            </li>
            <li>
              <p className="price">R$ 00,00</p>
              <span className="price-type">Med</span>
            </li>
            <li>
              <p className="price">R$ 00,00</p>
              <span className="price-type">Max</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export { Cards }
