/*
Todo {
    title: string,
    description : string,
    completed: boolean
}

*/

const mongoose = require("mongoose");

// mongodb+srv://akcmumbai13579:<db_password>@cluster0.idryt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://akcmumbai13579:<db_password>@cluster0.idryt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}
