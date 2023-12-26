const express = require("express")
const index = express()

index.use(express.json())

require("./MongoConnect")
const ExercicesRouter = require("./routes/routes")

const PORT = 3000
index.use("/ex", ExercicesRouter)
index.listen(PORT, ()=>{
  console.log(`rodando na porta ${PORT}`)
})