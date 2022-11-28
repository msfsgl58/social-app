/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./CreatePostPage.css";
import LeftMenu from "../menuFolder/left-menu";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { BiAddToQueue } from "react-icons/bi";

const CreatePostPage = (props) => {
  const [postImage, setPostImage] = useState(null);
  const [succes, setSucces] = useState(false)

  // console.log(props.state)
  // console.log(postImage)

  const post = () => {
    if (postImage === null) {
      alert("Resim Seçilmedi");
    } else {
      const formData = new FormData();
      formData.append("user", props.state.username);
      formData.append("post", postImage);
      axios
        .post("http://192.168.1.106:3100/post", formData)
        .then((result) => {
          console.log("başarılı" + result);
          setSucces(true)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="background">
      <LeftMenu />
      <div className="main">
        {succes === true ?
        <div style={{backgroundColor:'DarkTurquoise',position:'absolute',width:'50%',height:'50%',alignItems:"center",justifyContent:"center",display:"flex",marginLeft:'25%',marginTop:'16%',borderRadius:'20px'}}>
          <div style={{position:'absolute',top:'0px',right:'16px'}}>
            <label onClick={() => setSucces(false)}>X</label>
          </div>
          <label style={{fontSize:'26px'}}>Resminiz Başarı İle Yüklendi</label>
        </div> 
          :null}
        <div className="AddIconDiv">
          <button
            className="AddIconButton"
            onClick={() => {
              post();
            }}
          >
            <BiAddToQueue className="AddIcon" />
          </button>
          <label>Resminizi Seçtikten Sonra Üstteki Butona Basarak Yayınlayabilirsiniz</label>
          <div className="InputDiv">
            <form>
              <input
                type={"file"}
                accept={"image/png"}
                onChange={(e) => setPostImage(e.target.files[0])}
              />
            </form>
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

export default connect(mapStateToProps)(CreatePostPage);
