// seed.js
require('dotenv').config()
const mongoose = require('mongoose')
const Livro = require('./models/Livro')
const connectDB = require('./config/db')

const livros = [
  { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, genero: "Fantasia" },
  { titulo: "1984", autor: "George Orwell", ano: 1949, genero: "Distopia" },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance" },
  { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, genero: "Fantasia" },
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, genero: "Fantasia" },
  { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, genero: "Infantil" },
  { titulo: "Moby Dick", autor: "Herman Melville", ano: 1851, genero: "Aventura" },
  { titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, genero: "Distopia" },
  { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988, genero: "Ficção" },
  { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967, genero: "Romance" }
]

const seedDB = async () => {
  try {
    await connectDB()
    await Livro.deleteMany() // limpa coleção
    await Livro.insertMany(livros)
    console.log("Banco populado com 10 livros")
    process.exit()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

seedDB()
