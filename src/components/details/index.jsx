import { Prices } from '../prices'
import { CgProfile } from 'react-icons/cg'
import * as S from './style'

const Details = () => (
  <>
    <S.Container>
      <S.Poster src="#" alt="#" />
      <S.DetailsArea>
        <S.Title>Titulo</S.Title>
        <S.SubTitle>Subtitulo</S.SubTitle>
        <Prices />
      </S.DetailsArea>
    </S.Container>
    <S.Container style={{ display: 'block' }}>
      <S.ProfileArea>
        <S.ProfileContainer style={{ display: 'flex', alignItems: 'center' }}>
          <S.Profile>
            <CgProfile />
          </S.Profile>
          <h2 style={{ marginLeft: '1rem' }}>Vendedor</h2>
        </S.ProfileContainer>
        <S.ProfileContainer style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '1rem' }}>Quantidade: x</p>
          <S.CountButton>-</S.CountButton>
          <p>0</p>
          <S.CountButton>+</S.CountButton>
          <h2 style={{ marginLeft: '3rem' }}>R$15,00</h2>
        </S.ProfileContainer>
      </S.ProfileArea>

      <S.ProfileArea>
        <S.ProfileContainer style={{ display: 'flex', alignItems: 'center' }}>
          <S.Profile>
            <CgProfile />
          </S.Profile>
          <h2 style={{ marginLeft: '1rem' }}>Vendedor</h2>
        </S.ProfileContainer>
        <S.ProfileContainer style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '1rem' }}>Quantidade: x</p>
          <S.CountButton>-</S.CountButton>
          <p>0</p>
          <S.CountButton>+</S.CountButton>
          <h2 style={{ marginLeft: '3rem' }}>R$15,00</h2>
        </S.ProfileContainer>
      </S.ProfileArea>

      <S.ProfileArea>
        <S.ProfileContainer style={{ display: 'flex', alignItems: 'center' }}>
          <S.Profile>
            <CgProfile />
          </S.Profile>
          <h2 style={{ marginLeft: '1rem' }}>Vendedor</h2>
        </S.ProfileContainer>
        <S.ProfileContainer style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '1rem' }}>Quantidade: x</p>
          <S.CountButton>-</S.CountButton>
          <p>0</p>
          <S.CountButton>+</S.CountButton>
          <h2 style={{ marginLeft: '3rem' }}>R$15,00</h2>
        </S.ProfileContainer>
      </S.ProfileArea>

      <S.ProfileArea>
        <S.ProfileContainer style={{ display: 'flex', alignItems: 'center' }}>
          <S.Profile>
            <CgProfile />
          </S.Profile>
          <h2 style={{ marginLeft: '1rem' }}>Vendedor</h2>
        </S.ProfileContainer>
        <S.ProfileContainer style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '1rem' }}>Quantidade: x</p>
          <S.CountButton>-</S.CountButton>
          <p>0</p>
          <S.CountButton>+</S.CountButton>
          <h2 style={{ marginLeft: '3rem' }}>R$15,00</h2>
        </S.ProfileContainer>
      </S.ProfileArea>
    </S.Container>
  </>
)

export { Details }
