const express = require("express");
const app = express();

function usernameValidator(username, password){
    if(username != "akash" &&  password != "pass"){
        return false;
    }
    return true;
}

function kidneyValidate(KidneyId){
    if(KidneyId != 1 && kidneyId != 2){
        return false;
    }
    return true;
}

app.get("/check-up", function(req, res){
    const kidneyId =  req.query.kidneyId;

    if(!usernameValidator(req.query.username, req.query.password)){
        res.status(400).json({
            msg : "User doesn't exist",
        });
        return;
    }
    if(!kidneyValidate(kidneyId)){
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }
res.send("your heart is healthy");
});

app.put("/replace-kidney", function(req, res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(!usernameValidator(req.query.username, req.query.password)){
        res.status(403).json({
            msg: "user doesn't exist",
        });
        return ;
    }

    if(kidneyValidate(kidneyId)){
        res.status(411).json({
            msg: "wrong number",
        });
        return ;
    }

    res.send("Your heart is healthy");
});

app.listen(3000)
