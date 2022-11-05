import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
    console.log(data.KullanıcıAdı)
    console.log(data.Sifre)
   }


  return (
    <div className="background">
      <div
        className="container"
        style={{
          width: "50%",
          height: "76%",
          backgroundColor: "whitesmoke",
          borderRadius: "25px",
          textAlign:"center",
          display:"flex",
          flexDirection:'column',
          alignItems:"center",
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
          <input type="submit" className="btn" value={"Giriş Yap"}/>
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
