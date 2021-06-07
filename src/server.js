const express = require ('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const path = require("path")
dotenv.config();

//port
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname , ("../client/build"))));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , ("../client/build"))))
}

console.log(path.join(__dirname , ("../client/build")))
//Student Routes
app.use("/api/student/" , require('./Routes/students'));
app.use("/api/dashboard" , require('./Routes/dashboard'));
app.use("/api/registrationform/", require("./Routes/registrationForm"));

app.get('/' , (req ,res) => {
    res.send('SERVER STARED WORKING');
})

app.listen(port , () => {
    console.log(`PORT: ${port}`);
})
