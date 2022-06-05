import React, { FC } from 'react'
import { CountryType } from '../../features/countriesSlice';

interface IProps {
    country: CountryType
};

const CountryDetails: FC<IProps> = ({country}) => {
  return (
    <div>
        <h1>{country.name}</h1>
    </div>
  )
}

export default CountryDetails;