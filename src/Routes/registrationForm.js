const route = require('express').Router();
const database = require('../database/database');
const authorize  = require ("../Middleware/authorization");



//api to get all forms
route.get('/all',authorize , async (req, res) => {
    try {
        const responce = await database.query("SELECT * FROM students JOIN societies ON students.regNO = societies.student_id JOIN forms ON students.regNO = forms.student_id JOIN skills ON students.regNo = skills.student_id");
        res.send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

//api for searching specific student's form 
route.post('/',authorize , async (req, res) => {
    try {
        const student_email = req.student_email;
        const responce = await database.query("SELECT * FROM students JOIN societies ON students.regNO = societies.student_id JOIN forms ON students.regNO = forms.student_id JOIN skills ON students.regNo = skills.student_id WHERE students.student_email = $1" ,[student_email]);
        res.send(responce)
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`); 
    }
 })

 //api to get societies Data

 route.post('/societie',authorize , async (req, res) => {
    try {
        const str = req.student_email;
        const  student_id  = str.slice(1, 8); 
        const responce = await database.query("SELECT * FROM societies WHERE student_id = $1 " ,[student_id]);
        res.send(responce)
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`); 
    }
 })

//api for inserting societies data
route.post('/societies/', authorize , async (req, res) => {
    try {
        const str = req.student_email;
        const  student_id  = str.slice(1, 8); 
        const {society_one, society_two, society_three, society_four } = req.body;
        const responce = await database.query("INSERT INTO societies (student_id , society_one , society_two , society_three , society_four) VALUES ($1 , $2 , $3 , $4 , $5 )", [ student_id , society_one , society_two , society_three , society_four]);
        res.status(200).send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

//api for inserting form data
route.post("/forms", authorize , async (req ,res) => {
    try {
        const str = req.student_email;
        const  student_id  = str.slice(1, 8); 
        const {strength , weakness , know_pt_wish , part_of_community , productive_initiatives , fund_raising_idea} = req.body;
        const responce = await database.query("INSERT INTO forms (student_id , strength , weakness , know_pt_wish , part_of_community , productive_initiatives , fund_raising_idea) VALUES ($1 , $2 , $3 , $4 , $5 , $6 , $7)" ,
        [student_id , strength , weakness , know_pt_wish , part_of_community , productive_initiatives , fund_raising_idea]);
        res.status(200).send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

//api for inserting skills data
route.post('/skills' ,authorize , async (req ,res) =>{
    try {
        const str = req.student_email;
        const  student_id  = str.slice(1, 8);
        const {photoshop , web_dev , video_editing , content_writing , communication_skills , persuasion_skills , teamwork , et_management_skills , leadership_skills} = req. body;
        const responce = await database.query("INSERT INTO skills (student_id , photoshop , web_dev , video_editing , content_writing , communication_skills , persuasion_skills , teamwork , et_management_skills , leadership_skills) VALUES ($1, $2 , $3 , $4 , $5 , $6, $7, $8 , $9 , $10)",
        [student_id , photoshop , web_dev , video_editing , content_writing , communication_skills , persuasion_skills , teamwork , et_management_skills , leadership_skills]);
        res.status(200).send(responce.rows);
    } catch (error) {
        res.status(403).send(`SERVER ERROR : ${error}`);
    }
})

module.exports = route;