import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importez vos composants de page
import AcceuilPatient from "./composants/acceuil.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AcceuilPatient />} />
     </Routes>
    </Router>
  );
}

export default App;
