import * as S from './style'

const Header = () => (
    <S.Header>
    <img
      className="logoRotate"
      src="/hcMkpWhite.png"
      style={{
        width: 100,
      }}
    />
    <S.emphasis>Heroclix</S.emphasis>
    <S.Title>Marketplace</S.Title>

    </S.Header>
)

export { Header }
