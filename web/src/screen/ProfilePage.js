/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import "./ProfilePage.css"
import LeftMenu from "../menuFolder/left-menu";

function ProfilePage() {
  return (
    <div className="background">
      <LeftMenu />
      <div className="main">

      <div className="main-inside">
        <div className="profile-inside">
          <div className="profile-inside-up">
        <img src={(require("../asd.jpeg"))} className="profile-picture" />
        <p className="profile-name">msfsgl58</p>
        </div>
        <div className="profile-inside-down">
          <img src={require('../asd.jpeg')} className="photo" />
          <img src={require('../asd.jpeg')} className="photo" />
          <img src={require('../asd.jpeg')} className="photo" />
          <img src={require('../asd.jpeg')} className="photo" />
          <img src={require('../asd.jpeg')} className="photo" />
        </div>
          </div>
      </div>
      </div>
    </div>
  );
}
export default ProfilePage;
