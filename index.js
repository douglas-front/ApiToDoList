const express = require("express")
const index = express()

index.use(express.json())

require("./MongoConnect")
const AtRouter = require("./routes/routes")

const PORT = 3000
index.use("/at", AtRouter)
index.listen(PORT, ()=>{
  console.log(`rodando na porta ${PORT}`)
})