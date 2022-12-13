
function alerta(){
    let nome = prompt('Qual o seu nome?')
    let idade = prompt('Quantos anos você tem? ')
    let linguagem = prompt('Qual linguagem de programação você está estudando?')
    
    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`)
    
    let res = prompt(`Você gosta de estudar a ${linguagem}?\nResponda com o número 1 para SIM ou 2 para NÃO`)
    resposta(res)

}

function resposta(valor){
    if (valor == 1){
        alert('Muito Bom! Continue estudando e você terá muito sucesso')
    }
    else if (valor == 2){
        alert('Ahh que pena... Já tentou aprender outras linguagens?')
    } 
    else{
        alert("Valor inválido")
        return
    }
}

let botao = document.querySelector('button')

botao.addEventListener("click", evento => {
    evento.preventDefault()
    alerta()
})
