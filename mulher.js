const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Mariana Nascimento',
        imagem: 'https://photos.google.com/photo/AF1QipPJXHAKqWOqbPFluNal5mQN4XlvVL9MeIdG5K4R',
        minibio: 'Estudante de JavaScript em transição de carreira'
    })
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)