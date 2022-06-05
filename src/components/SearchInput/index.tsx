import React from 'react'
import { searchCountries } from '../../features/countriesSlice';
import { useAppDispatch } from '../../store';

const SearchInput = () => {

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCountries(e.target.value));
  };

  return (
    <input onChange={(e) => handleChange(e)} type="text" />
  )
}

export default SearchInput