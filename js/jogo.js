let botao = document.querySelector('button')
botao.addEventListener("click", evento => {
    evento.preventDefault()
    jogo()
})

function jogo(){
    let sorteio =  (Math.random() * 10).toFixed(0)
    alert('Bem-vindo ao jogo de adivinhação.\nVocê tem três tentativas para acertar o número de 0 a 10 sorteado\nBoa sorte!')
    
    let chute = parseInt(prompt("Digite sua primeira tentativa"))
    if(chute == sorteio){
        alert('Parabéns você acertou de primeira! ;)')
    }
    else{
        chute = prompt(`Tente novamente!\nVocê tem mais 2 tentativas`)
        for (let index = 0; index < 2; index++) {
            if(chute == sorteio){
                alert('Parabéns você acertou! ;)')
                break
            }
            else{
                chute = prompt(`Tente novamente!\nVocê tem mais ${1 - index}`)
                if(chute == sorteio) continue
            }
            alert(`Não foi dessa vez.\nO número sorteado era ${sorteio}`)
            break
        }
    }
}