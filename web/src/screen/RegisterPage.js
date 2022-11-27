/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./App.css";
import "./LoginPage.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  useEffect(() => {
    axios
      .get("http://192.168.1.106:3100/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [user, setUser] = useState([]);
  const [kAdı, setKAdı] = useState('');
  const [sifre, setSifre] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [register] = useState(false)
  const navigate = useNavigate()

  const Register = () => { 
    user.some((item) => {
      if (kAdı === item.kadı) {
       alert('Bu Kullanıcı Adı Kullanılıyor')
      }
      else if(kAdı === '' && sifre === '') {
        alert("Lütfen Boş Seçenek Bırakmayın")
      }
      else {
        axios.post("http://192.168.1.106:3100/user",{
            kadı:kAdı,
            password:sifre,
            name:name,
            surname:surname,
            profilePicture:profilePicture
        })
        .then((result) => {
            console.log(result,'Kayıt Başarılı Şekilde Yapıldı.')
        })
        .catch((err) => {
            console.log(err)
        })
        return register === false
      }
    });
    navigate('/Login')
  };

  return (
    <div className="background">
      <div
        className="container"
        style={{
          width: "50%",
          height: "76%",
          backgroundColor: "whitesmoke",
          borderRadius: "25px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 className="social-app-text">Social APP</h3>

        <h4 className="login-text">Kayıt Ol</h4>
        <form className="form">
          <label className="label">Kullanıcı Adı</label>
          <input type={"text"} onChange={e => setKAdı(e.target.value)} required={true} />
          <label className="label">Şifre</label>
          <input type={"text"} onChange={e => setSifre(e.target.value)} required={true} />
          <label className="label">İsim</label>
          <input type={"text"} onChange={e => setName(e.target.value)} required={true} />
          <label className="label">Soyisim</label>
          <input type={"text"} onChange={e => setSurname(e.target.value)} required={true} />
          <div>
          <label className="label">Profil Resmi</label>
          <input 
                type={"file"}
                accept={"image/png"}
                onChange={(e) => setProfilePicture(e.target.files[0])}
                />
          </div>
          <div style={{marginTop:'10px',}}>
         <input
            type="submit"
            className="btn"
            value={"Kayıt Ol"}
            onClick={() => Register()}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
