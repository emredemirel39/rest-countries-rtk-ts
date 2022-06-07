import React, { FC } from 'react'
import CountryList from '../../components/CountryList'
import SearchInput from '../../components/SearchInput'
import styles from './HomePage.module.scss';

const HomePage: FC = () => {
  return (
    <div className={`${styles.homePage} main-background`}>
        <SearchInput/>
        <CountryList/>
    </div>
  )
}

export default HomePage;