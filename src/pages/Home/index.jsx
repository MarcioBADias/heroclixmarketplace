import { Cards } from '../../components/cards'
import { Header } from '../../components/header'
import { SearchMenu } from '../../components/search-menu'

const Home = () => {
  return (
    <>
      <Header />
      <SearchMenu />
      <Cards />
    </>
  )
}

export { Home }
