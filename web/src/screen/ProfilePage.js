/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./App.css";
import "./ProfilePage.css";
import LeftMenu from "../menuFolder/left-menu";
import { connect } from "react-redux";
import axios from "axios";

const ProfilePage = (props) => {
  const [photo, setPhoto] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [modal, setModal] = useState(false);
  const [modalID, setModalID] = useState();

  useEffect(() => {
    axios
      .get("http://192.168.1.106:3100/post/" + props.state.username)
      .then((res) => {
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line array-callback-return
    users.map((item) => {
      if (item.kadı === props.state.username) {
        setName(item.name);
        setSurname(item.surname);
      }
    });
  });

  useEffect(() => {
    axios
      .get("http://192.168.1.106:3100/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePhoto = (modalID) => {
    axios
      .delete(`http://192.168.1.106:3100/post/${modalID}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setModal(false);
  };

  return (
    <div className="background">
      <LeftMenu />
      <div className="main">
        <div className="main-inside">
          <div className="profile-inside">
            <div className="profile-inside-up">
              <img src={require("../asd.jpeg")} className="profile-picture" />
              <div style={{ flexDirection: "column" }}>
                <p className="profile-name">{props.state.username}</p>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    margin: "30px",
                  }}
                >
                  <p className="name">{name}</p>
                  <p className="surname">{surname}</p>
                </div>
              </div>
            </div>
            <div className="profile-inside-down">
              {photo.map((item) => {
                const base64String = btoa(
                  String.fromCharCode(...new Uint8Array(item.img.data.data))
                );
                return (
                  <img
                    src={`data:image/png;base64,${base64String}`}
                    className="photo"
                    key={item._id}
                    onClick={() => {
                      setModalID(item._id);
                      setModal(true);
                    }}
                  />
                );
              })}

              {modal === true ? (
                <div className="modal-main">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      margin: "10px",
                    }}
                  >
                    <label style={{ flex: "12", fontSize: "23px" }}>
                      RESMİ SİL
                    </label>
                    <label
                      style={{ flex: "1", fontSize: "23px" }}
                      onClick={() => setModal(false)}
                    >
                      X
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "31.25rem",
                    }}
                  >
                    <img
                      src={require("../asd.jpeg")}
                      style={{
                        width: "31.25rem",
                        height: "31.25rem",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label onClick={() => deletePhoto(modalID)}>SİL</label>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps)(ProfilePage);
