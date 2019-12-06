const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:hello@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)
db.sync()
    .then(() => console.log("database is up"))
    .catch(err => console.error(err))


module.exports = db 