const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function Main(){

  await mongoose.connect(process.env.DBCONNECT)

  console.log("conexão sucedida")
}

Main().catch((err)=> console.log(err))

module.exports = Main