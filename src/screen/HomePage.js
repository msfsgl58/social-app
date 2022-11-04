import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LeftMenu from '../menuFolder/left-menu'

function HomePage() {
  return (
    <div className="background">
      <LeftMenu />
      <div className="main"></div>
    </div>
  );
}

export default HomePage;
