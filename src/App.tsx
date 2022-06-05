import { Route, Routes } from "react-router";
import DetailsPage from "./views/DetailsPage";
import HomePage from "./views/HomePage";

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:alpha3code" element={<DetailsPage />}/>
      </Routes>
    </main>
  );
}

export default App;
