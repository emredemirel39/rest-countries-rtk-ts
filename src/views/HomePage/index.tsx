import React, { FC } from 'react'
import CountryList from '../../components/CountryList'
import SearchInput from '../../components/SearchInput'

const HomePage: FC = () => {
  return (
    <div>
        <SearchInput/>
        <CountryList/>
    </div>
  )
}

export default HomePage;