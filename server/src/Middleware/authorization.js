const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const {token} = req.body;
        const jwtToken = token;
       
        if (!jwtToken) {
            console.log("11");
            return res.status(403).send("Not Authorize");
        }

        const payload = jwt.verify(jwtToken, process.env.signature);
        req.student_email = payload.email;
        next();
    } catch (err) {
        console.log(err.message);
        console.log("2");
        return res.status(403).send("Not Authorize ");
    }
}