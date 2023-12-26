const express = require("express")

const router = express.Router()

console.log("rotas deu ceerto")

router.post("/at")
router.get("/")
router.delete("/:id")

module.exports = router