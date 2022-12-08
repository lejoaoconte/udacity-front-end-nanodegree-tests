// Require dovend and configure apikey and baseurl to API
import dotenv from "dotenv";
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
import bodyParser from "body-parser";
import express from "express";
import fetch from "node-fetch";

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
import cors from "cors";
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Requires server

// Get data one city
app.post("/set-city", (req, res) => {
  const data = req.body;
  projectData = data;

  res.send("OK");
});

// Get data all cities
app.get("/get-all", (req, res) => {
  res.send(projectData);
});
