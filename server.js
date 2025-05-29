"use strict";

const express = require("express");
const app = express();

//specifies port that application is served on
const port = 8080;

//specifies the directory where the express app will find the static files
app.use(express.static("./public"));


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});