import { Prices } from '../prices'
import * as S from './style'

const Card = ({ name, img, collection, price }) => (
  <S.Card>
    <S.Image src={img} alt={`imagem de ${name}`} />
    <S.Title>{name}</S.Title>
    <S.SubTitle>{collection}</S.SubTitle>
    <Prices price={price} />
  </S.Card>
)

export { Card }
