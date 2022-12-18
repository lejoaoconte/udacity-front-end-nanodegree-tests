const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const mockAPIResponse = require("./mockAPI.js");

dotenv.config();

const key = process.env.API_KEY;
const port = process.env.PORT || 8055;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.listen(port, function () {
  console.log(`Running in ${port}`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/api", function (req, res) {
  const { url } = req.body.data;
  const uri = `http://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}`;

  axios.post(uri).then((result) => {
    res.send(result.data);
  });
});
