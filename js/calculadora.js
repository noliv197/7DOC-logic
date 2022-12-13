let botao = document.querySelector('button')
botao.addEventListener("click", evento => {
    evento.preventDefault()
    calculadora()
})

function soma(a,b){
    return a + b
}
function subtrai(a,b){
    return a - b
}
function divisao(a,b){
    if(b == 0){
        return 'Não é possivel dividir por 0'
    }
    else return a / b
}
function multiplica(a,b){
    return a * b
}
function pegaNumeros(){
    let num1 = parseFloat(prompt('Digite o primeiro número da operação'))
    while(true){
        if(isNaN(num1)) {
            num1 = parseFloat(prompt('Valor inválido. Digite um número para operação'))
            continue
        }else break
    }
    let num2 = parseFloat(prompt('Digite o segundo número da operação'))
    while(true){
        if(isNaN(num2)) {
            num2 = parseFloat(prompt('Valor inválido. Digite um número para operação'))
            continue
        }else break
    }
    return [num1,num2]
}
function calculadora(){
    let operacao
    let numeros
    let resultado
    let continua
    
    alert('Bem-vindo a calculadora Javascript')
    while(true){
        operacao = prompt('Escolha uma das operações:\nsoma, subtração, multiplicação, divisão ou sair')
        if(operacao == 'soma'){
            numeros = pegaNumeros()
            resultado = soma(numeros[0],numeros[1])
            alert(`Resultado da ${operacao}:\n${numeros[0]} + ${numeros[1]} = ${resultado}`)
        }
        else if(operacao == 'subtração' || operacao == 'subtracao'){
            numeros = pegaNumeros()
            resultado = subtrai(numeros[0],numeros[1])
            alert(`Resultado da ${operacao}:\n${numeros[0]} - ${numeros[1]} = ${resultado}`)
        }
        else if(operacao == 'multiplicação' || operacao == 'multiplicacao'){
            numeros = pegaNumeros()
            resultado = multiplica(numeros[0],numeros[1])
            alert(`Resultado da ${operacao}:\n${numeros[0]} * ${numeros[1]} = ${resultado}`)
        }
        else if(operacao == 'divisão' || operacao == 'divisao'){
            numeros = pegaNumeros()
            resultado = divisao(numeros[0],numeros[1])
            alert(`Resultado da ${operacao}:\n${numeros[0]} / ${numeros[1]} = ${resultado}`)
        }
        else if(operacao == 'sair' || operacao == 'SAIR') break
        else {
            alert('Valor inválido!')
            continue
        }

        continua = prompt('Deseja fazer outras operações?\nDigite SIM para continuar ou NÃO para sair ')
        if(continua == 'sim' || continua == 'SIM') continue
        else break
    }
    alert('Até a próxima!')
}

