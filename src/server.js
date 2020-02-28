const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

app.listed(process.env.PORT || 8080);
