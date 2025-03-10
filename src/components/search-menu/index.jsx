import * as S from './style'
import { HiSearchCircle, HiShoppingCart } from 'react-icons/hi'

const SearchMenu = () => (
  <S.Container>
    <S.Content>
    <S.Form action="#">
      <div>
        <S.Input type="text" />
        <S.SearchButton>
          <HiSearchCircle />

        </S.SearchButton>
      </div>
      <S.Subtitle>Procure pelo nome do seu herói</S.Subtitle>
    </S.Form>
    <S.Form action="">
      <S.Select name="" id="">
        <option style={{ color: '#000000' }} value=""></option>
        <option style={{ color: '#000000' }} value="">
          Wheels of Vengeance
        </option>
      </S.Select>
      <S.Subtitle>Selecione uma coleção para procura</S.Subtitle>
    </S.Form>
    </S.Content>
    <S.Content className="login">
      <S.CartButton>
        <HiShoppingCart />
      </S.CartButton>
      <S.Subtitle style={{ maxWidth: 150 }}>Cadastre-se ou Login</S.Subtitle>
    </S.Content>
  </S.Container>
)

export { SearchMenu }
