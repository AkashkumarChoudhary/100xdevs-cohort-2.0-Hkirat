const mongoose = require ("mongoose");

mongoose.connect("");

const User = mongoose.model('Users', {name : String, email:String, password : String});


application.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.bosy.name;

    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }
    const user = new User({
        name: 'AKash Kumar',
        email: 'dcjnfnc@gmail.com',
        password: '112334'
    });
    user.save();
    res.json({
        "msg": "User created successfully"
    })
})
