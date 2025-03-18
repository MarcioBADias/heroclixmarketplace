import * as S from './style'

const Prices = ({ price }) => (
  <S.Prices>
    <li style={{ listStyle: 'none' }}>
      <S.Price color="green">R$ {price * 7},00</S.Price>
      <S.PriceType>Min</S.PriceType>
    </li>
    <li style={{ listStyle: 'none' }}>
      <S.Price color="yellow">R$ {price * 8},00</S.Price>
      <S.PriceType>Med</S.PriceType>
    </li>
    <li style={{ listStyle: 'none' }}>
      <S.Price color="red">R$ {price * 10},00</S.Price>
      <S.PriceType>Max</S.PriceType>
    </li>
  </S.Prices>
)

export { Prices }
