const jwt = require('jsonwebtoken');
require('dotenv').config();

const {signature} = process.env;

const jwtGenerator = (student_email) => {
    const payload = {
        email : student_email
    }
   return jwt.sign(payload , signature , {expiresIn : "1hr"})
}

module.exports = jwtGenerator;