/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./App.css";
import "./ProfilePage.css"
import LeftMenu from "../menuFolder/left-menu";
import { connect } from "react-redux";
import axios from "axios";

const ProfilePage = (props) => {

  const [photo, setPhoto] = useState([])
  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [surname, setSurname] = useState()

  useEffect(() => {
    axios
      .get('http://192.168.1.106:3100/post/'+ props.state.username)
      .then((res) => {
        setPhoto(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line array-callback-return
    users.map((item) => {
      if(item.kadı === props.state.username){
         setName(item.name)
         setSurname(item.surname)
      }
    })
  });

  useEffect(() => {
    axios.get('http://192.168.1.106:3100/user')
    .then((res) => {
      setUsers(res.data)
    })
    .catch((err) => console.log(err))
  },[])

  return (
    <div className="background">
      <LeftMenu />
      <div className="main">

      <div className="main-inside">
        <div className="profile-inside">
          <div className="profile-inside-up">
        <img src={(require("../asd.jpeg"))} className="profile-picture" />
        <div style={{flexDirection:'column'}}>
        <p className="profile-name">{props.state.username}</p>
        <div style={{flexDirection:'row',display:'flex',margin:'30px'}}>
          <p className="name">{name}</p>
          <p className="surname">{surname}</p>
        </div>
        </div>
        </div>
        <div className="profile-inside-down">
          {
            photo.map((item) => {
              const base64String = btoa(
                String.fromCharCode(...new Uint8Array(item.img.data.data))
               );
              return(
                <img src={`data:image/png;base64,${base64String}`} className='photo' key={item._id} />
              )
            })
          }
          
        </div>
          </div>
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state : state
  }
}
export default  connect(mapStateToProps) (ProfilePage);
