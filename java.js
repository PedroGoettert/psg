// carne =  400g por pessoa  --- + de 6 horas = 650g
// Cerveja = 1200 ml por pessoa + 6 horas = 2000 ml 
// refrigerante/agua = 1000 ml por pessoa + 6 horas =  1500 ml 




let inputadulto = document.getElementById("adulto")
let inputcriancas = document.getElementById("criancas")
let inputduracao = document.getElementById("duracao")
let inputcalcular = document.getElementById("calcular")


inputcalcular.addEventListener("click", function(){
    let adulto = inputadulto.value
    let criancas = inputcriancas.value
    let duracao = inputduracao.value

    let qtdtotalcarne = carnePP(duracao) * adulto + (carnePP(duracao) / 2 * criancas)
    let qtdtotalcerveja = cervejaPP(duracao) * adulto
    let qtdtotalbebida = bebidaPP(duracao) * adulto + (bebidaPP(duracao) / 2 * criancas)

    let p = "total de carne: " + qtdtotalcarne + " total de cerveja: " + qtdtotalcerveja + " quantidade de bebidas: " + qtdtotalbebida

    document.getElementById("resultado").innerHTML =`<p>${qtdtotalcarne/1000}Kg de carne</p>`
    document.getElementById("resultado").innerHTML += `<p>${qtdtotalbebida/1000}L de bebdia</p>` 
    document.getElementById("resultado").innerHTML += `<p>${qtdtotalcerveja/1000}L de cerveja</p>`
})

function carnePP(duracao){
if(duracao >= 6){
    return 650
}
else{
    return 400
}
}

function cervejaPP(duracao){
if(duracao >= 6){
    return 2000
}
else{
    return 1200
}
}
function bebidaPP(duracao){
if(duracao >= 6){
    return 1500
}
else{
    return 1000
}
}


