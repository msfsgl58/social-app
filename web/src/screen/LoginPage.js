import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

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
  const [kAdı, setKAdı] = useState();
  const [sifre, setSifre] = useState();
  const [logging, setLogging] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setKAdı(data.KullanıcıAdı);
    setSifre(data.Sifre);
  };

  const Login = () => { 
    user.some((item) => {
      if (kAdı === item.kadı) {
        console.log("Kullanıcı Adı Bulundu.");
        if (sifre === item.password) {
          setLogging(true)
          console.log("Giriş Başarılı.");
          return logging === true;
        } else {
          console.log("Sifre Hatalı");
          alert('Şifre Hatalı')
          return logging === false;
        }
      }
      else {
        console.log("Kullanıcı Adı Yok")
        alert("Kullanıcı Adı Bulunamadı Lütfen Kayıt Olun")
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
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label className="label">Kullanıcı Adı</label>
          <input {...register("KullanıcıAdı", { required: true })} />
          <label>Şifre</label>
          <input {...register("Sifre", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          {logging === true ? <Link to={"/profil"}>
          <input
            type="submit"
            className="btn"
            value={"Giriş Yap"}
            onClick={() => Login()}
            />
            </Link>
            :<input
            type="submit"
            className="btn"
            value={"Giriş Yap"}
            onClick={() => Login()}
            />}
          
        </form>
        <div>
          <input type="submit" className="btn" value={"Şifremi Unuttum"} />
          <input type="submit" className="btn" value={"Kayıt Ol"} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
