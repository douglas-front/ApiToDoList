const express = require("express")
const index = express()

index.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

index.use(express.json())

require("./MongoConnect")
const ExercicesRouter = require("./routes/routes")

const PORT = 3000
index.use("/ex", ExercicesRouter)
index.listen(PORT, ()=>{
  console.log(`rodando na porta ${PORT}`)
})