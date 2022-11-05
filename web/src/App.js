import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screen/HomePage";
import LoginPage from "./screen/LoginPage";
import ProfilePage from "./screen/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Profil" element={<ProfilePage />} />
      <Route path="/Login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
