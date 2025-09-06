const  express= require("express");

const app = express();
const zod = require("zod")
const schema = zod.array(zod.number());


const schemas= zod.object({
    email:zod.string(),
    password:zod.string,
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys:  zod.array(zod.number())
})


app.use(express.json());

// function midddleware(req, res, next){
//     fetch.then((){
//         next();
//     })
// }

app.post("/health-checkup", function(req, res){
    // kidney= [1,2]
    const kidneys = req.body.kidneys;
    // const kidneyslenth  = kidneys.length;
    // res.send("you have" + kidneyslenth + " kidneys");

    const response = schema.safeParse(kidneys)
    res.send({
        response
    })
});

// // global catches
// app.use(funtion(err, req, res, next){
//     res.json({
//         msg: " sorry something is up with our server"
//     })
// })


app.listen(3000);