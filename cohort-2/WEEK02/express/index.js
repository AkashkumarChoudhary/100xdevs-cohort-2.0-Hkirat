//  const express = require("express");

//  const app = express();



// app.get("/", function(req, res){
   
// })

//  app.listen(3000)


// example -2

import express from "express";

const app = express()

const users= [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/",function(req, res){
    const johnKidneys= users[0].kidneys;
    const numberofkidneys= johnKidneys.length;
    let numberOfHealthyKidneys= 0;
    for (let i = 0 ;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys= numberOfHealthyKidneys+ 1;
        }
    }

    const numberOfUnhealthyKidneys= numberofkidneys - numberOfHealthyKidneys;
    res.json({
        numberofkidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})


app.post("/",function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    for (let i =0 ;i <users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy= true;
    }
    res.json({})
})


app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys= [];
        for(let i = 0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
    users[0].kidneys= newKidneys;
    res.json({msg:"done"})
    }else {
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUhealthyKidney = false;
    for(let i = 0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUhealthyKidney= true;
        }
    }
    return atleastOneUhealthyKidney
}

app.listen(3000);