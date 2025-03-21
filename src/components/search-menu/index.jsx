import { useState } from 'react'
import * as S from './style'
import { HiSearchCircle, HiShoppingCart } from 'react-icons/hi'

const SearchMenu = ({ onSearch, onSelectCollection }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCollection, setSelectedCollection] = useState('')

  // Função para lidar com a mudança no campo de pesquisa
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    onSearch(event.target.value) // Passa o termo de pesquisa para o componente pai
  }

  // Função para lidar com a seleção da coleção
  const handleCollectionChange = (event) => {
    setSelectedCollection(event.target.value)
    onSelectCollection(event.target.value) // Passa a coleção selecionada para o componente pai
  }

  return (
    <S.Container>
      <S.Content>
        <S.Form action="#">
          <div>
            <S.Input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Digite o nome do herói"
            />
            <S.SearchButton>
              <HiSearchCircle />
            </S.SearchButton>
          </div>
          <S.Subtitle>Procure pelo nome do seu herói</S.Subtitle>
        </S.Form>

        <S.Form action="">
          <S.Select name="collection" id="collection" onChange={handleCollectionChange}>
            <option style={{ color: '#000000' }} value="">
              Selecione uma coleção
            </option>
            <option style={{ color: '#000000' }} value="Wheels of Vengeance">
              Wheels of Vengeance
            </option>
            {/* Adicione mais opções conforme necessário */}
          </S.Select>
          <S.Subtitle>Selecione uma coleção para procurar</S.Subtitle>
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
}

export { SearchMenu }
