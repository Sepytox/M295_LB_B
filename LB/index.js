import express from "express";

const app = express();
const port = 3000;

app.use(express.json);
app.use(express.urlencoded({ extended: true }));