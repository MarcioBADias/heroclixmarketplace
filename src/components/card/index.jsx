const Card = ({ name, img, collection }) => (
  <div className="card">
    <img src={img} alt={`imagem de ${name}`} />
    <h2>{name}</h2>
    <span>{collection}</span>
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
)

export { Card }
