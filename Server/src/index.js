//! SERVIDOR CON WEBSERVERS
//const characters = require('./utils/data.js');
// const getCharById = require("./controllers/getCharById.js");
// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;

//     if (url.includes("/rickandmorty/character")) {
//       let id = +url.split("/").pop();
//       getCharById(res, id);
//     }
//   })
//   .listen(3001, "localhost");
//! SERVER WHITH EXPRESS
const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());
server.use('/rickandmorty', router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
