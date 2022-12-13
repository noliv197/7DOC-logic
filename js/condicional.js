

function compara(var1, var2){
    if(var1 == var2 && typeof(var1) === typeof(var2)){
        document.write(`As variáveis ${var1} e ${var2} tem o mesmo valor e o mesmo tipo <br>`)
    }
    else if (var1 != var2 && typeof(var1) === typeof(var2)){
        document.write(`As variáveis ${var1} e ${var2} tem o mesmo tipo, mas valores diferentes <br>`)
    }
    else if (var1 == var2 && typeof(var1) != (var2)){
        document.write(`As variáveis ${var1} e ${var2} tem o mesmo valor mas, tipos diferentes <br>`)
    }
    else{
        document.write(`As variáveis ${var1} e ${var2} tem valor e tipo diferentes <br>`)
    }
}

let numeroUm = 1
let numUm = 1
let stringUm = "1"
let numeroTrinta = 30
let stringTrinta = "30"

compara(numeroUm,numUm)
compara(numeroUm,numeroTrinta)
compara(numeroUm,stringUm)
compara(numeroUm,stringTrinta)

