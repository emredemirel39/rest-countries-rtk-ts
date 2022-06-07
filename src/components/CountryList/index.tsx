import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../features/countriesSlice';
import { setTheme } from '../../features/themeSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import '../../styles/main.scss';
import styles from './CountryList.module.scss';


const CountryList:FC= () => {

    const countries = useAppSelector(state => state.countries);
    const theme = useAppSelector(state => state.theme.mode);
    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
   
  return (
    <div className={`main-background ${styles.countryList}`}>
        <ul>
          {countries.data && (
            countries.data
              .filter(country => country.name.toLowerCase().includes(countries.search.toLowerCase()))
              .map(country => {

                return (
                <li key={country.alpha3Code} >
                    <div className={`${styles.countryCard} secondary-background`}>
                      <div>
                        <img src={country.flag} alt={country.alpha3Code} />
                      </div>
                      <div>
                        <Link to={`/${country.alpha3Code}`}>
                          <h2 className='text'>{country.name}</h2>
                        </Link>
                        <p className='text'>{country.capital}</p>
                        <p className='text'>{country.population}</p>
                      </div>
                    </div>
                </li>
              )})
          )}
        </ul>
    </div>
  )
}

export default CountryList