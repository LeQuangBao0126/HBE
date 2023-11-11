

const { DataSource } = require("typeorm")
const userEntity = require("./../models/user.model")
let dbConnection = null
const dbConnect = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "hotel",
    // synchronize: true,
    // logging: true,
    entities: [userEntity],
})
async function initDB() {
    try {
        const dataSource = await dbConnect.initialize()
        // Performs connection to the database. This method should be called once on application bootstrap. This method not necessarily creates database connection (depend on database type), but it also can setup a connection pool with database to use.//
        if (!dbConnection) {
            dbConnection = dataSource
        }
        return dbConnection
    } catch (err) {
        console.log({ errDB: err })
        throw err
    }
}
function getDBConnection() {
    console.log(dbConnection)
    return dbConnection
}
module.exports = {
    initDB,
    getDBConnection
}