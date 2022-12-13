let botao = document.querySelector('button')
botao.addEventListener("click", evento => {
    evento.preventDefault()
    listaCompras()
})

function removeItem(array, index){
    array.splice(index,1)
}
function adicionaItem(array, item, index){
    array[index].push(item)
}
function verificaItem(listaCategorias,categoria,listaItens,item){
    if(listaCategorias.includes(categoria)){
        let index = listaCategorias.indexOf(categoria)
        adicionaItem(listaItens,item,index)
    }
    else{
        alert('Categoria não existe. Item não adicionado')
    }
}
function exibeLista(lista,listaItens){
    return lista.map(categoria => {
        return `${categoria}: ${listaItens[lista.indexOf(categoria)]}\n`
    }).join('')
}
function listaCompras(){
    let listaCategorias = ['frutas','laticinios','congelados','doces']
    let listaItens = []
    for (let index = 0; index < listaCategorias.length; index++) {
        listaItens.push([])
    }
    let index
    let confirmacao
    
    let inicio = prompt('Olá\nVocê deseja adicionar um item na sua lista de compras?\nDigite 1 para SIM ou 2 para NÃO')
    if(inicio == 1){
        let item = prompt('Digite o item que deseja acrescentar')
        let categoria = prompt(`Em qual categoria esse item se encaixa:\n${listaCategorias}`)
        verificaItem(listaCategorias,categoria,listaItens,item)
        while(true){
            let continua = prompt('Deseja continuar alterando a lista?\nDigite 1 para SIM ou 2 para NÃO')
            if(continua != 1) break

            let resposta = prompt('Digite 1 para ADICIONAR um item e 2 para REMOVER um item')
            if(resposta == 1){
                item = prompt('Digite o item que deseja acrescentar')
                categoria = prompt(`Em qual categoria esse item se encaixa:\n${listaCategorias}`)
                verificaItem(listaCategorias,categoria,listaItens,item)
            }
            else if(resposta == 2){
                confirmacao = true
                item = prompt(`Lista de compras atual:\n${exibeLista(listaCategorias,listaItens)}\nDigite o item que deseja remover`)
                listaItens.forEach(lista => {
                    if(lista.includes(item)){
                        index = lista.indexOf(item)
                        removeItem(lista,index)
                        confirmacao = false 
                    }
                })
                if(confirmacao){
                    alert('Não foi possível encontrar o item dentro da lista')
                }
            }
            alert(`Lista de compras:\n${exibeLista(listaCategorias,listaItens)}
            `)
        }
    }
    alert('Até mais')



}