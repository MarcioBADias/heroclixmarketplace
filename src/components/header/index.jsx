import * as S from './style'

const Header = () => (
  <header>
    <img
      className="logoRotate"
      src="/hcMkpWhite.png"
      style={{
        width: 100,
      }}
    />
    <S.Title>My</S.Title>
    <S.emphasis>Heroclix</S.emphasis>
    <S.Title>Marketplace</S.Title>
  </header>
)

export { Header }
