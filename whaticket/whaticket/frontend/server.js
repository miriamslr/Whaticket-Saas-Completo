
const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, "automatizaai")));
app.get("/*", function (_req, res) {
	res.sendFile(path.join(__dirname, "automatizaai", "index.html"));
});

app.listen(process.env.SERVER_PORT || 3333);