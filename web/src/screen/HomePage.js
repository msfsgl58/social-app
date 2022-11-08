/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LeftMenu from "../menuFolder/left-menu";

function HomePage() {
  return (
    <div className="background">
      <LeftMenu />
      <div className="main">
        <div className="main-inside">

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} style={{width:'50px',height:'50px',borderRadius:'25px'}}></img>
          <h2 className="social-app-text">msfsgl58</h2>
            </div>
          </div>

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} style={{width:'50px',height:'50px',borderRadius:'25px'}}></img>
          <h2 className="social-app-text">msfsgl58</h2>
            </div>
          </div>

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} style={{width:'50px',height:'50px',borderRadius:'25px'}}></img>
          <h2 className="social-app-text">msfsgl58</h2>
            </div>
          </div>

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} style={{width:'50px',height:'50px',borderRadius:'25px'}}></img>
          <h2 className="social-app-text">msfsgl58</h2>
            </div>
          </div>

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} style={{width:'50px',height:'50px',borderRadius:'25px'}}></img>
          <h2 className="social-app-text">msfsgl58</h2>
            </div>
          </div>


          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} style={{width:'50px',height:'50px',borderRadius:'25px'}}></img>
          <h2 className="social-app-text">msfsgl58</h2>
            </div>
          </div>


          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} style={{width:'50px',height:'50px',borderRadius:'25px'}}></img>
          <h2 className="social-app-text">msfsgl58</h2>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default HomePage;
