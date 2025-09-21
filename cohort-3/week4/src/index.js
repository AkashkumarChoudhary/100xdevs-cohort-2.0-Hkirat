const express = require ("express");
const app = express();

const users = [{
    name:"John",
    kidneys:[{
        healthy:false,
    }]
}]

app.get("/", function(req, res){
    const johnKidney = users[0].kidneys;
    console.log(johnKidney);
    const numberOfKidney = johnKidney.length;
    let numberOfHealthyKidney = 0;
    for(let i =0;i<johnKidney.length;i++){
        if(johnKidney[i].healthy){
            numberOfHealthyKidney = numberOfHealthyKidney+1;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
    
})

app.post("/", function(req, res){
    
})

app.listen(3000);