// write basic express boilerplate code,
const express = require("express")
const {createtodo, updateTodo} = require("./types")
// const types = require("./types")


const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    // const parsePayload = types.createtodo
    const parsePayload = createtodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({  
            msg: "you sent the wrong input",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg:"todo created"
    })
})

app.get("/todos", async function(req, res){
    const  todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayLoad = req.body;
    const parsePayload= updateTodo.safeParse(updatePayLoad);
    if(!updatePayLoad.success){
        res.status(411).json({
            msg: "you have sent the wrong input"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"todo marked as completed"
    })
})

app.listen = 8000
// with express.json().middleware