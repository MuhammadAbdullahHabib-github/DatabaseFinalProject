const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

// const devConfig = {
//     host:process.env.Host,
//     database:process.env.Database,
//     user:process.env.User,
//     password:process.env.Password
// };

const devConfig = `postgresql://${process.env.User}:${process.env.Password}@${process.env.Host}/${process.env.Database}`;

const prodConfig = process.env.DATABASE_URL;


const database = new Pool({
    connectionString:process.env.NODE_ENV === "production" ? prodConfig : devConfig
});

module.exports = database;