const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res){
    // do health checkup here
    const kidneyId =req.headers.kidneyId;
    const username=   req.headers.username;
    const password = req.headers.password;

    if (username != "akash" && password != "pass"){
        res.status(400).json({
            msg : "User does not exist",
        });
        return;
    }

if(kidneyId != 1 && kidneyId != 2 ){
    res.status(411).json({
        msg: "wrong input",
    });
    return ;
}
// do something with kidney here

res.send("Your heart is healthy");

});

app.put("/replace-kidney", function(req, res){
    // do health check here

    const kidneyId = req.headers.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if( username != "akash" && password != "pass"){
        res.status(400).json({
            msg: "user doesn't exist";
        });
        return ;

    }

    if(kidneyId!= 1 && kidneyId != 2){
        req.status(411).json({
            msg: "wrong input",
        });
        return ;
    }
    res.send("your heart is healthy");
});