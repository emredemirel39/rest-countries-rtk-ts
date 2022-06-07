import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { CountryType } from '../../features/countriesSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import styles from './CountryDetails.module.scss';

interface IProps {
    country: CountryType
};

const CountryDetails: FC<IProps> = ({country}) => {

  const theme = useAppSelector(state => state.theme);
  const countries = useAppSelector(state => state.countries)
  const dispatch = useAppDispatch()

  return (
    <div className={`${styles.countryDetails} secondary-background text`}>
        <div className={styles.imageBox}>
          <img src={country.flags.svg} alt={country.alpha3Code} />
        </div>
      <div className={styles.infoCard}>
        <div className={styles.generalInfoBox}>
          <h1>{country.name}</h1>
          <p><b>Native name: </b>{country.nativeName}</p>
          <p><b>Capital: </b>{country.capital}</p>
          <p><b>Population: </b>{country.population}</p>
          <p><b>Population: </b>{country.population}</p>
          <p><b>Region: </b>{country.region}</p>
          <p><b>Subregion: </b>{country.subregion}</p>
          <p><b>Languages: </b>{country.languages?.map(language => language.name).join(', ')}</p>
          <p><b>Currencies: </b>{country.currencies?.map(currency => currency.name).join(', ')}</p>
        </div>
        <div className={styles.borderInfoBox}>
          <h4>Border Countries:</h4>
          <div>
            {country.borders?.length > 0 ? (
              country.borders?.map((borderCountry, i) =>{

                let borderCountryFullName = countries.data?.find(country => country.alpha3Code === borderCountry)?.name
                let selectedCountry = countries.data?.find(country => country.alpha3Code === borderCountry)

                return (
                <Link className='main-background' to={`/${selectedCountry?.alpha3Code}`} key={i}>{borderCountryFullName}</Link>
                )
              })
            ) : <p>None Border Countries</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails;