const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userSchema.js");
const Post = require("./models/postSchema.js");
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then((res) => {
    console.log("baglantı kuruldu");
  })
  .catch((err) => {
    console.log(err);
  });

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

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
      console.log(result, "Başarılı Şekilde Kaydedildi");
    })
    .catch((err) => {
      console.log(err);
    });
});

server.get("/user", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

server.post("/post", upload.single("post"), (req, res) => {
  const savepost = new Post({
    name: req.body.name,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  savepost
    .save()
    .then((res) => {
      console.log("kaydedildi");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("image is saved");
});

server.get("/post", (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
