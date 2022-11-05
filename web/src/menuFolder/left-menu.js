import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { LeftMenuData } from "./left-menu-data";

function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="social-app-div">
        <h3 className="social-app-text">Social APP</h3>
      </div>
      <div className="left-menu-button-div">
        {LeftMenuData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
export default LeftMenu;
