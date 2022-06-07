import React from 'react'
import { searchCountries } from '../../features/countriesSlice';
import { useAppDispatch } from '../../store';
import styles from './SearchInput.module.scss'

const SearchInput = () => {

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCountries(e.target.value));
  };

  return (
    <input className={`text secondary-background ${styles.searchInput}`} onChange={(e) => handleChange(e)} type="text" />
  )
}

export default SearchInput