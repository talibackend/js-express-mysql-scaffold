const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    dialect : 'mysql',
    host : process.env.MYSQL_HOST,
    username : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DB,
    port : process.env.MYSQL_PORT
});