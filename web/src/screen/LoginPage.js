/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./App.css";
import "./LoginPage.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
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
  const [logging, setLogging] = useState(false)
  const navigate = useNavigate()

  const Login = () => { 
    user.some((item) => {
      if (kAdı === item.kadı) {
        console.log("Kullanıcı Adı Bulundu.");
        if (sifre === item.password) {
          setLogging(true)
          console.log("Giriş Başarılı.");
          navigate('/')
          return logging === true;
        } else {
          console.log("Sifre Hatalı");
          alert('Şifre Hatalı')
        }
      }
      else {
        console.log("Kullanıcı Adı Yok")
      }
    });
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

        <h4 className="login-text">Giriş Yap</h4>
        <form className="form">
          <label className="label">Kullanıcı Adı</label>
          <input type={"text"} onChange={e => setKAdı(e.target.value)} required={true} />
          <label>Şifre</label>
          <input type={"text"} onChange={e => setSifre(e.target.value)} required={true} />
         <input
            type="submit"
            className="btn"
            value={"Giriş Yap"}
            onClick={() => Login()}
            />
        </form>
        <div>
          <input type="submit" className="btn" value={"Şifremi Unuttum"} />
          <input type="submit" className="btn" value={"Kayıt Ol"} onClick={() => navigate('/register')} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
