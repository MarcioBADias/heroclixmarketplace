import { Prices } from '../prices'
import * as S from './style'

const Details = () => (
  <S.Container>
    <S.Poster src="#" alt="#" />
    <S.DetailsArea>
      <S.Title>Titulo</S.Title>
      <S.SubTitle>Subtitulo</S.SubTitle>
      <Prices />
    </S.DetailsArea>
  </S.Container>
)

export { Details }
