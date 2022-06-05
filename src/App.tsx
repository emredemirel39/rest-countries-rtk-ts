import { useEffect } from "react";
import { CountryType, fetchCountries, sabir } from "./features/countriesSlice";
import store, { useAppDispatch, useAppSelector } from "./store";

function App() {

const countries = useAppSelector(state => state.countries)
const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch])

  const deneme = (country: CountryType) => {
    dispatch(sabir(country));
  }

  return (
    <div className="App">
      {countries.data && (
        countries.data.map(country => <h1 key={country.alpha3Code}>{country.name}</h1>)
      )}
    </div>
  );
}

export default App;
