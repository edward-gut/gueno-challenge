"use strict";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "@babel/polyfill";

const app = express();

import routes from './routes/appRoutes';

//Middlewares

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Route
app.use(express.Router());
app.use("/api",routes);
/*
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname,'public')));*/
app.use(express.static(path.join(__dirname, '../challenge-client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../challenge-client/build/index.html'))
})

//Puerto
app.set("puerto",process.env.PORT || 3000);
app.listen(app.get("puerto"), function () {
    console.log('Example app listening on port 3000!');
});

