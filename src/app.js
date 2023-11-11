const express = require("express")
const { default: dbConnect } = require("./config/database")
const { User } = require("./models/user.model")
const { initDB, getDBConnection } = require("./config/database")

const app = express()

initDB().then((dbConnection) => {
    console.log("ConnectDB thành công")

    app.get("/products", async (req, res) => {
        const data = await dbConnection.getRepository("User").find()
        return res.json({ msg: data })
    })

    app.listen(8080, () => {
        console.log("app running at http://127.0.0.1://8080")
    })
}).catch(err => {
    process.exit(1)
})