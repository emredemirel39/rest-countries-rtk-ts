import React from 'react'
import { useParams } from 'react-router'
import CountryDetails from '../../components/CountryDetails';
import { CountryType } from '../../features/countriesSlice';
import { useAppSelector } from '../../store';

const DetailsPage = () => {

  const { alpha3code } = useParams();
  const countries = useAppSelector(state => state.countries);

  // in children component we defined type of country prop as CountryType
  // but in parent component type of selected country was CountryType | undefined. 
  // we can solve type error with 3 methods. 1- we can force type of selectedCountry as CountryType in parent component.
  // 2- we can defined type of prop in child component CountryType | undefined
  // or with conditional rendering wit && operator.
  
  const selectedCountry = countries.data?.find(country => country.alpha3Code === alpha3code) as CountryType;

  // how we can use typescript with props
  return (
    <div>
        <CountryDetails country={selectedCountry}/>
    </div>
  )
}

export default DetailsPage