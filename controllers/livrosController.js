const Livro = require('../models/Livro')

// GET
exports.getLivros = async (req, res) => {
  try {
    const livros = await Livro.find()
    res.status(200).json(livros)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}

// POST
exports.createLivro = async (req, res) => {
  try {
    const { titulo, autor, ano, genero } = req.body

    if (!titulo || !autor || !ano || !genero) {
      return res.status(400).json({ erro: 'Preencha todos os campos' })
    }

    const livro = new Livro({ titulo, autor, ano, genero })
    await livro.save()

    res.status(201).json(livro)
  } catch (error) {
    res.status(400).json({ erro: error.message })
  }
}

// PUT
exports.updateLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado' })
    }

    res.status(200).json(livro)
  } catch (error) {
    res.status(400).json({ erro: error.message })
  }
}

// DELETE
exports.deleteLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id)

    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado' })
    }

    res.status(200).json({ mensagem: 'Livro deletado' })
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
