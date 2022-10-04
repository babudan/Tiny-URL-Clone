const express = require("express")
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());



mongoose.connect("mongodb+srv://Shreyad:ULCn2m1OMNHF7ME0@cluster0.ufn2trt.mongodb.net/url-Shortner-Project", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);
app.use('/*', function (req, res) {
    return res.status(400).send({ status: false, msg: 'You Are In Wrong Path' })
})



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


