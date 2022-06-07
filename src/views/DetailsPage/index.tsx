import { useNavigate, useParams } from 'react-router'
import CountryDetails from '../../components/CountryDetails';
import { CountryType } from '../../features/countriesSlice';
import { useAppSelector } from '../../store';
import styles from './DetailsPage.module.scss';

const DetailsPage = () => {
  
  const homePage = useNavigate()

  const { alpha3code } = useParams();
  const countries = useAppSelector(state => state.countries);

  // in children component we defined type of country prop as CountryType
  // but in parent component type of selected country was CountryType | undefined. 
  // we can solve type error with 3 methods. 1- we can force type of selectedCountry as CountryType in parent component.
  // 2- we can defined type of prop in child component CountryType | undefined
  // or with conditional rendering wit && operator.
  
  const selectedCountry = countries.data?.find(country => country.alpha3Code === alpha3code) as CountryType;

  // We dont need to use props while we can use redux state management.
  // But I want to show how we can use typescript with props
  return (
    <div className={`${styles.detailsPage} main-background`}>
        <div className={styles.btnBox}>
          <button onClick={() => homePage('/')}>Go back to all countries</button>
        </div>
        <CountryDetails country={selectedCountry}/>
    </div>
  )
}

export default DetailsPage