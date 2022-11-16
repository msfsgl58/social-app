/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./HomePage.css"
import LeftMenu from "../menuFolder/left-menu";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("http://192.168.1.106:3100/post")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="background">
      <LeftMenu />
      <div className="main">
        <div className="main-inside">
          
          {data.map((item) => {
            const base64String = btoa(
             String.fromCharCode(...new Uint8Array(item.img.data.data))
            );
            return(
              <div className="post-card" key={item._id}>
                <div style={{flexdirection:'row',display:'flex'}}>
                <img src={require("../asd.jpeg")} className="inside-profile-picture" /> 
                <p className="inside-profile-text">msfsgl58</p>
              </div>
              <div>
              <img src={`data:image/png;base64,${base64String}`} className='post' />
              </div>
              </div>
            ) 
          })}

        </div>
      </div>
    </div>
  );
}

export default HomePage;
