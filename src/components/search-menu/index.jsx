import * as S from './style'
import { HiSearchCircle, HiShoppingCart } from 'react-icons/hi'

const SearchMenu = () => (
  <S.Container>
    <S.Form action="#">
      <div>
        <S.Input type="text" />
        <S.SearchButton>
          <HiSearchCircle />
        </S.SearchButton>
      </div>
      <span>Procure pelo nome do seu herói</span>
    </S.Form>
    <S.Form action="">
      <select name="" id="">
        <option value=""></option>
        <option value="">Wheels of Vengeance</option>
      </select>
      <span>Selecione uma coleção para procura</span>
    </S.Form>

    <div className="login">
      <p>Cadastre-se ou efetuar Login</p>
      <HiShoppingCart />
    </div>
  </S.Container>
)

export { SearchMenu }
