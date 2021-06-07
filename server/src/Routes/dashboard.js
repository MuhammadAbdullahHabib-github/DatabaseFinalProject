const route = require('express').Router();
const database = require('../database/database');
const authorize = require("../Middleware/authorization")



// api /api/dashboard/
route.post("/",  authorize , async (req, res) => {
    try {
        const  student_email  = req.student_email;
        const responce = await database.query("SELECT * FROM students WHERE student_email = $1 ", [student_email]);
        res.status(200).send(responce.rows[0]);
        console.log(error.message);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

route.put("/update/name", authorize, async (req, res) => {
    const { name } = req.body;
    const student_email  = req.student_email;
    try {
        const responce = await database.query("UPDATE students SET name = $1  WHERE student_email = $2 RETURNING *", [name, student_email]);
        res.status(200).send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

route.put("/update/contact", authorize, async (req, res) => {
    const { contact_number } = req.body;
    const student_email  = req.student_email;
    try {
        const responce = await database.query("UPDATE students SET contact_number = $1  WHERE student_email = $2 RETURNING *", [contact_number, student_email]);
        res.status(200).send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

route.put("/update/faculty", authorize, async (req, res) => {
    const { faculty } = req.body;
    const  student_email  = req.student_email;
    try {
        const responce = await database.query("UPDATE students SET  faculty = $1 WHERE student_email = $2 RETURNING *", [faculty, student_email]);
        res.status(200).send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

route.put("/update/hostel", authorize, async (req, res) => {
    const { hostel} = req.body;
    const  student_email  = req.student_email;
    try {
        const responce = await database.query("UPDATE students SET hostel = $1  WHERE student_email = $2 RETURNING *", [hostel, student_email]);
        res.status(200).send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

route.put("/update/room", authorize, async (req, res) => {
    const { room_no } = req.body;
    const  student_email  = req.student_email;
    try {
        const responce = await database.query("UPDATE students SET  room_no = $1 WHERE student_email = $2 RETURNING *", [room_no, student_email]);
        res.status(200).send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

module.exports = route;
