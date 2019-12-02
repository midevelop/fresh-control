const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categoryScheme = require('../model/category')
// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});

// подключение
mongoose.connect("mongodb://localhost:27017/fresh-control", { useNewUrlParser: true,  useUnifiedTopology: true  });

const User = mongoose.model("User", userScheme);
const Category = mongoose.model("Category", categoryScheme)
const user = new User({
    name: "Bill",
    age: 41
});

console.log(userScheme, categoryScheme)

const category = new Category({
    name: "Bill",
    age: 41
})

user.save(function(err){
    // mongoose.disconnect();  // отключение от базы данных

    if(err) return console.log(err);
    console.log("Сохранен объект", user);
});

category.save((err)=> {
    // mongoose.disconnect();  // отключение от базы данных

    if(err) return console.log(err);
    console.log("Сохранен объект", category);
})

console.log(
    Category.find({}, (err, data) => {
        console.log(data)
    })

)
