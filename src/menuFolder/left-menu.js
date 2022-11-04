import React from "react";
import "./menu.css"

function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="social-app-div">
        <h3 className="social-app-text">Social APP</h3>
      </div>
      <div className="left-menu-button-div">
        <p className="left-menu-button-item">Ana Sayfa</p>
        <p className="left-menu-button-item">Ara</p>
        <p className="left-menu-button-item">Oluştur</p>
        <p className="left-menu-button-item">Profil</p>
        <p className="left-menu-button-exit">Çıkış Yap</p>
      </div>
    </div>
  );
}
export default LeftMenu;
