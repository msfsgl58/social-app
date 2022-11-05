const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userSchema.js");

mongoose
  .connect(
    "mongodb+srv://msfsgl58:msf123456@cluster0.qcxgovx.mongodb.net/SocialAPP"
  )
  .then((res) => {
    console.log("baglantı kuruldu");
  })
  .catch((err) => {
    console.log(err);
  });

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.listen(3100, () => {
  console.log("Server Aktif");
});

server.post("/user", (req, res) => {
  const newUser = new User({
    kadı: `${req.body.kadı}`,
    password: `${req.body.password}`,
  });
  newUser
    .save()
    .then((result) => {
      console.log(result,'Başarılı Şekilde Kaydedildi');
    })
    .catch((err) => {
      console.log(err);
    });
});

server.get('/user',(req,res) => {
    User.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})
