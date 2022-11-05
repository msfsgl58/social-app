const express = require("express");
const mongoose = require("mongoose");

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
  server.use(express.urlencoded({extended: false}));

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

server.listen(3100,() => {
    console.log('Server Aktif')
})