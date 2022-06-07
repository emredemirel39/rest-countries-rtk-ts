import { Route, Routes } from "react-router";
import DetailsPage from "./views/DetailsPage";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import './styles/main.scss';
import Header from "./components/Header";
import { useAppSelector } from "./store";

function App() {

  const theme = useAppSelector(state => state.theme.mode);

  return (
    <div className={`App ${theme} main-background`}>
      <Header/>
      <main className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path=":alpha3code" element={<DetailsPage />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
