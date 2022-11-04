import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LeftMenu from './menuFolder/left-menu'
import RightMenu from './menuFolder/right-menu'

function HomePage() {
  return (
    <div className="background">
      <LeftMenu />
      <div className="container"></div>
      <RightMenu />
    </div>
  );
}

export default HomePage;
