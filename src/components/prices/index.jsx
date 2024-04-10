import * as S from './style'

const Prices = () => (
  <S.Prices>
    <li>
      <S.Price color="green">R$ 00,00</S.Price>
      <S.PriceType>Min</S.PriceType>
    </li>
    <li>
      <S.Price color="yellow">R$ 00,00</S.Price>
      <S.PriceType>Med</S.PriceType>
    </li>
    <li>
      <S.Price color="red">R$ 00,00</S.Price>
      <S.PriceType>Max</S.PriceType>
    </li>
  </S.Prices>
)

export { Prices }
