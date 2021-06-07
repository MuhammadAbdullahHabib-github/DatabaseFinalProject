const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

const {Host , Database , User , Password} = process.env;

const database = new Pool({
    host:Host,
    database:Database,
    user:User,
    password:Password
})

module.exports = database;