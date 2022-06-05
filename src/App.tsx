import { Route, Routes } from "react-router";
import DetailsPage from "./views/DetailsPage";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path=":alpha3code" element={<DetailsPage />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  );
}

export default App;
