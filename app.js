// подключение express
const express = require("express");
const mongoose = require("mongoose");
const categoryScheme = require('./model/category')
require('dotenv').config()

const Category = mongoose.model("Category", categoryScheme)
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

// создаем объект приложения
const app = express();
let port = process.env.PORT || 3000
app.set('port', port);

app.use(express.static(__dirname + "/public"));

// определяем обработчик для маршрута "/"
app.get("/", function (request, response) {
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});

app.get("/category", async (_, response) => {
    // let category = [
    //     "Промокоды",
    //     "Таблетки",
    //     "Косметика",
    //     "Продукты"
    // ]
    let category =  await Category.find({})
    response.json({category})
})
// начинаем прослушивать подключения на 3000 порту
app.listen(port);
