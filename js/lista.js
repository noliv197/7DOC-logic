let botao = document.querySelector('button')
botao.addEventListener("click", evento => {
    evento.preventDefault()
    listaCompras()
})

function listaCompras(){
    let listaCategorias = ['frutas','laticinios','congelados','doces']
    let listaItens = [['banana'],['leite'],['pão-de-queijo'],['chocolate']]
    let index
    
    let inicio = prompt('Olá\nVocê deseja adicionar um item na sua lista de compras?\nDigite 1 para SIM ou 2 para NÃO')
    if(inicio == 1){
        while(true){
            let item = prompt('Digite o item que deseja acrescentar')
            let categoria = prompt(`Em qual categoria esse item se encaixa:\n${listaCategorias}`)
            if(listaCategorias.includes(categoria)){
                index = listaCategorias.indexOf(categoria)
                listaItens[index].push(item)
            }else{
                alert('Categoria não existe. Item não adicionado')
            }
            alert(`Lista de compras:\n${listaCategorias.map(categoria => {
                return `${categoria}: ${listaItens[listaCategorias.indexOf(categoria)]}\n`
                }).join('')}
            `)
            
            let continua = prompt('Deseja acrescentar mais itens?\nDigite 1 para SIM ou 2 para NÃO')
            if(continua != 1) break
        }
    }
    alert('Até mais')
}