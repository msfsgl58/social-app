import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom"
import HomePage from "./screen/HomePage";
import ProfilePage from "./screen/ProfilePage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
      </Routes>
  );
}

export default App;
