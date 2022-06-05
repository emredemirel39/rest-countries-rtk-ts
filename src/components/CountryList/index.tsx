import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../features/countriesSlice';
import { useAppDispatch, useAppSelector } from '../../store';

const CountryList = () => {

    const countries = useAppSelector(state => state.countries)
    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
   
  return (
    <div>
        {countries.data && (
            countries.data
            .filter(country => country.name.toLowerCase().includes(countries.search.toLowerCase()))
            .map(country =><Link to={`/${country.alpha3Code}`}> <h1 key={country.alpha3Code}>{country.name}</h1></Link>)
        )}
    </div>
  )
}

export default CountryList