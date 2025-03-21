import { useState } from 'react'
import { Header } from '../../components/header'
import { SearchMenu } from '../../components/search-menu'
import { Cards } from '../../components/cards'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCollection, setSelectedCollection] = useState('')

  return (
    <div>
      <Header />
      <SearchMenu onSearch={setSearchTerm} onSelectCollection={setSelectedCollection} />
      <Cards searchTerm={searchTerm} selectedCollection={selectedCollection} />
    </div>
  )
}

export { Home }