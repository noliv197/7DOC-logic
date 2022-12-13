function retornaCurso(desenvolvedor,res){
    if(desenvolvedor == 'Front-end' && res == 1){
        return 'React'
    }
    if(desenvolvedor == 'Front-end' && res == 2){
        return 'Vue'
    }
    if(desenvolvedor == 'Back-end' && res == 1){
        return 'C#'
    }
    if(desenvolvedor == 'Back-end' && res == 2){
        return 'Java'
    }
}
function loop(){
    const lista = []
    let desenvolvedor 
    let curso
    let jornada
    let respostaDois
    
    let respostaUm = prompt("Você quer seguir para área de Frontend ou seguir para a área de Backend?\nResponda 1 para Frontend e 2 para Backend")
    if(respostaUm != 1 && respostaUm != 2) {
        while(true){
            respostaUm = prompt("Valor inválido!\nResponda 1 para Frontend e 2 para Backend")
            if (respostaUm == 1 || respostaUm == 2) break
        }
    }

    if(respostaUm == 1){
        desenvolvedor = "Front-end"
        respostaDois = prompt("Você quer aprender React ou Vue?\nResponda 1 para React e 2 para Vue")
        if (respostaDois == 1 || respostaDois == 2){
            curso = retornaCurso(desenvolvedor, respostaDois)
        }
        else{
            while(true){
                respostaDois = prompt("Valor inválido!\nResponda 1 para React e 2 para Vue")
                if (respostaDois == 1 || respostaDois == 2) {
                    curso = retornaCurso(desenvolvedor, respostaDois)
                    break
                }
            }
        }
    }
    else if(respostaUm == 2){
        desenvolvedor = "Back-end"
        respostaDois = prompt("Você quer aprender C# ou Java?\nResponda 1 para C# e 2 para Java")
        if (respostaDois == 1 || respostaDois == 2){
            curso = retornaCurso(desenvolvedor, respostaDois)
        }
        else{
            while(true){
                respostaDois = prompt("Valor inválido!\nResponda 1 para C# e 2 para Java")
                if (respostaDois == 1 || respostaDois == 2) {
                    curso = retornaCurso(desenvolvedor, respostaDois)
                    break
                }
            }
        }
    }
   
    let respostaTres = prompt("Você deseja seguir se especializando na área ou pretende seguir se desenvolvendo para se tornar Fullstack?\nResponda 1 para Especialização na Área e 2 para Desenvolvimento Fullstack")
    if(respostaTres != 1 && respostaTres != 2) {
        while(true){
            respostaTres = prompt("Valor inválido!\nResponda 1 para Especialização e 2 para Fullstack")
            if (respostaTres == 1 || respostaTres == 2) break
        }
    }

    if (respostaTres == 1) jornada = 'Especialização'
    else if (respostaTres == 2) jornada = 'Fullstack'
    
    let tecnologia = prompt("Quais tecnologias você tem interesse de se especializar?")
    lista.push(tecnologia)
    let continua = prompt("Tem mais alguma tecnologia que deseja acrescentar?\nSe SIM digite ok, se NÃO digite fim")

    while(true){
        if(continua == 'ok'){
            lista.push(prompt(`Sua lista atual: ${lista}\nDigite outras tecnologias que deseja aprender`))
            continua = prompt("Tem mais alguma tecnologia que deseja acrescentar?\nSe SIM digite ok, se NÃO digite fim")
        }
        else{
            alert(`Então você quer se tornar desenvolvedor ${desenvolvedor} começando a trabalhar com ${curso}\nPara essa jornada de ${jornada} estude bastante todas as tecnologias que você tem interesse:\n${lista}\n\nNão se esqueça de sempre ir atrás de novidades!\nBoa jornada!`)
            break
        }
        
    }
}



let botao = document.querySelector('button')
botao.addEventListener("click", evento => {
    evento.preventDefault()
    loop()
})
