/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./HomePage.css"
import LeftMenu from "../menuFolder/left-menu";

function HomePage() {
  return (
    <div className="background">
      <LeftMenu />
      <div className="main">
        <div className="main-inside">

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} className="inside-profile-picture" />
          <p className="inside-profile-text">msfsgl58</p>
            </div>
            <div>
              <img src={require("../asd.jpeg")} className="post"/>
            </div>
          </div>

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} className="inside-profile-picture"></img>
          <h2 className="inside-profile-text">msfsgl58</h2>
            </div>
            <div>
              <img src={require("../asd.jpeg")} className="post"/>
            </div>
          </div>

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} className="inside-profile-picture"></img>
          <h2 className="inside-profile-text">msfsgl58</h2>
            </div>
            <div>
              <img src={require("../asd.jpeg")} className="post"/>
            </div>
          </div>

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} className="inside-profile-picture"></img>
          <h2 className="inside-profile-text">msfsgl58</h2>
            </div>
            <div>
              <img src={require("../asd.jpeg")} className="post"/>
            </div>
          </div>

          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} className="inside-profile-picture"></img>
          <h2 className="inside-profile-text">msfsgl58</h2>
            </div>
            <div>
              <img src={require("../asd.jpeg")} className="post"/>
            </div>
          </div>


          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} className="inside-profile-picture"></img>
          <h2 className="inside-profile-text">msfsgl58</h2>
            </div>
            <div>
              <img src={require("../asd.jpeg")} className="post"/>
            </div>
          </div>


          <div className="post-card">
            <div style={{flexdirection:'row',display:'flex'}}>
          <img src={require("../asd.jpeg")} className="inside-profile-picture"></img>
          <h2 className="inside-profile-text">msfsgl58</h2>
            </div>
            <div>
              <img src={require("../asd.jpeg")} className="post"/>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default HomePage;
