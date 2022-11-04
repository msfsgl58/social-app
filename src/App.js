import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import HomePage from "./HomePage";
import ProfilePage from './ProfilePage'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
      </Routes>
  );
}

export default App;
