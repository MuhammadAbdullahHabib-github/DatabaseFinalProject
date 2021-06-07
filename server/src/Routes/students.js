const route = require('express').Router();
const database = require('../database/database');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../Utils/jwtGenerator');
const validInfo = require('../Middleware/validInfo');
const authorization = require("../Middleware/authorization");
require('dotenv').config();


route.post('/register', validInfo ,  async (req, res) => {
    try {
        // data from body
        const { regNo, name, contact_number, faculty, hostel, room_no, password, student_email } = req.body;
        // Check either student registered  before or not 
        const studentExist = await database.query('SELECT * FROM students WHERE student_email = $1', [student_email]);
        if (studentExist.rows.length !== 0) {
            return res.status(401).send("Student already registered ....!");
        }
        //password bcrypt
        const salt = await bcrypt.genSalt(parseInt(process.env.ROUND));
        const bcryptedPassword = await bcrypt.hash(password, salt);
        //Save data in database 
        const responce = await database.query('INSERT INTO students (regNo, name, contact_number, faculty, hostel, room_no, password , student_email) VALUES ($1 , $2 , $3 , $4 , $5 , $6 , $7 , $8) RETURNING *',
            [regNo, name, contact_number, faculty, hostel, room_no, bcryptedPassword, student_email]);
        //JWT generation
        const token = jwtGenerator(responce.rows[0].student_email);
        res.send({ token });

    } catch (err) {
        console.log(err);
        res.status(500).send(`Server Error: ${err.message}`);
    }

});

route.post('/login', validInfo , async (req, res) => {
    try {
        // get data from body 
        const { student_email, password } = req.body;
        //Check student either registered or not
        const studentExist = await database.query("SELECT regNo , student_email , password FROM students WHERE student_email = $1", [student_email]);
        if (studentExist.rows.length === 0) {
            return res.status(401).send("Student does not exist ....!");
        }
        //comapare password
        const confirmPassword = await bcrypt.compare(password, studentExist.rows[0].password);
        if (!confirmPassword) {
            return res.status(401).send("Password or email is incorrect")
        }
        //JWT generation
        const token = jwtGenerator(studentExist.rows[0].student_email);
        res.send({ token });

    } catch (error) {
        console.log(error.message);
        res.status(500).send(`Server Error: ${error.message}`);
    }
});


route.post("/is-verify" , authorization , async(req , res) =>{
    try {
        res.json(true);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(`Server Error: ${error.message}`);
    }
})


module.exports = route;
