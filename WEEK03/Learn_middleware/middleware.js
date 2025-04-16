const express = require("express");
const app = expree();

function userMiddleware(req, res, next){
    if(username != "akash" && password != "pass"){
        res.status(403).json({
            msg : "Incomplete inputs",
        });
    } else{
        next();
    }
};

function kidneyMiddleware(req, res, next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    }else{
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    // do something with kidney here 
    res.send("Your heart is healthy");
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    // do something with kidney here
    res.send("Your heart is healthy");
});

app.get("/heart-checkup", userMiddleware, function(req, res){
    // do something with user here
    res.send("Your heart is healthy")
})