const express = require("express")

const router = express.Router()
const exercicesControll = require("../controllers/controller")

console.log("rotas deu ceerto")

router.post("/post", exercicesControll.create)
router.get("/", exercicesControll.findAll)
router.delete("/:id", exercicesControll.delete)

module.exports = router