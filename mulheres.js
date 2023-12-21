const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
        {
        nome: 'Mariana Nascimento',
        imagem: 'https://photos.google.com/photo/AF1QipPJXHAKqWOqbPFluNal5mQN4XlvVL9MeIdG5K4R',
        minibio: 'Estudante de BackEnd em transição de carreira',
     },

     {
        nome: 'Nath Finanças',
        imagem: 'https://photos.google.com/photo/AF1QipPJXHAKqWOqbPFluNal5mQN4XlvVL9MeIdG5K4Rhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.portaldaindustria.com.br%2Fportaldaindustria%2Fnoticias%2Fmedia%2Fimagem_plugin%2Fnathfinancas_UTFHizR.jpg&tbnid=_eMKy4FTx-KwmM&vet=12ahUKEwi_1ObK8JuDAxX9NrkGHZA7A38QMygIegQIARBm..i&imgrefurl=https%3A%2F%2Fnoticias.portaldaindustria.com.br%2Fnoticias%2Fsesi-lab%2Fnath-financas-andre-carvalhal-e-charles-watson-confirmados-em-festival-gratuito-no-sesi-lab%2F&docid=swOD0VM3EgNw5M&w=1292&h=1212&q=nath%20finan%C3%A7as&ved=2ahUKEwi_1ObK8JuDAxX9NrkGHZA7A38QMygIegQIARBm',
        minibio: 'CEO & Founder da Nath Finanças e Queen Laces |Administradora |Forbes Under 30 |Orientadora Financeira',
     },

     {
        nome: 'Simaria Coceição',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_400_400/0/1563116727359?e=1708560000&v=beta&t=dsh3lkEr8sWUrPwZ-Sr7iUn8JxNH5ewPYzGh7Yya7FI',
        minibio: 'Desenvolvedora e Instrutora da PrograMaria',
     },
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}
       
function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)