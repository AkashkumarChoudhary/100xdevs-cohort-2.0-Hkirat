// write basic express boilerplate code,
const express = require("express")
const {createtodo, updateTodo} = require("./types")
// const types = require("./types")


const app = express();
app.use(express.json());

app.post("/todo", function(req, res){
    const createPayload = req.body;
    // const parsePayload = types.createtodo
    const parsePayload = createtodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong input",
        })
        return;
    }
})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){
    const updatePayLoad = req.body;
    const parsePayload= updateTodo.safeParse(updatePayLoad);
    if(!updatePayLoad.success){
        res.status(411).json({
            msg: "you have sent the wrong input"
        })
        return;
    }
})

app.listen = 8000
// with express.json().middleware