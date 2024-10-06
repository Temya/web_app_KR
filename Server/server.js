const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = "mongodb://127.0.0.1:27017/test";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Подключено к MongoDB"))
    .catch(err => console.error("Ошибка подключения к MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});