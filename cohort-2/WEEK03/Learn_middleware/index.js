 const express = require ("express");

const app = express();

app.get("/health-checkup" , function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = parseInt(req.query.kidneyId);
    if(username === "akash" && password === "pass"){
      if(kidneyId === 1 || kidneyId === 2){
        res.status(200).json({
            msg: "your kisdney is fine"
        })
      }
        
    }
    res.status(400).json({"msg" : "Something up with your inputs"})
});


app.listen(3000);


// const express = require("express");

// const app  =  express();

// app.get("/health-checkup", function(req, res){
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.headers.kidneyId;

  
//   if (username != "akash" && password != "pass" ){
//     res.status(400).json({"msg ": "Something up with your inputs"})
//     return  
//   }



// if(kidneyId == 1 || kidneyId==2){
//   res.status(400).json({
//    "msg": "your kidney is healthy"
   
//   })
// }
// });
// app.listen(3000);