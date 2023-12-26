const mongoose = require("mongoose")

const schema = mongoose.Schema

const AtSchema = new schema({
  title: {type: String, required: true},
  description: {type: String, required: true}
})

module.exports = mongoose.model("At", AtSchema)