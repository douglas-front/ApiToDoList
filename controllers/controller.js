const exercices = require("../schema/schema")


exports.findAll = async (req, res) => {
  try {
    const exercicesFind = await exercices.find()
    res.json(exercicesFind)
  } catch (error) {
    res.status(500).json({message: "error"})
  }
}
exports.create = async (req, res) =>{
  try {
    const {title , description} = req.body

    const PostExercice = new exercices({
      title,
      description,
    })

    await PostExercice.save()

    return res.status(200).json(PostExercice)

  } catch (error) {
      console.log(`algo deu errado = ${error}`)
      res.status(500).json({message: "erro ao salvar"})
  }
}