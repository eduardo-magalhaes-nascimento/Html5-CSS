function calcular(){
    let inputP = document.getElementById('peso')
    let inputA = document.getElementById('altura')
    const resposta = document.getElementById('res')

    let peso = parseFloat(inputP.value);
    let altura = parseFloat(inputA.value)
    let imc = peso/(altura * altura)
    let imc_arredond = parseFloat(imc.toFixed(2));

    //resposta.textContent = imc_arredond
    if (imc_arredond < 18.5) {
        resposta.innerHTML = `${imc_arredond}<br>IMC ABAIXO DO PESO`
    } else if (18.5 <= imc_arredond && imc_arredond <= 24.99){
        resposta.innerHTML = `${imc_arredond}<br>IMC NORMAL`
    } else if (25 < imc_arredond && imc_arredond <= 29.99) {
        resposta.innerHTML = `${imc_arredond}<br>IMC SOBRESO`
    } else if (imc_arredond > 30) {
        resposta.innerHTML = `${imc_arredond}<br>IMC OBESIDADE`
    } else {
        resposta.innerHTML = 'Valores inválidos!'
    }

    
    
}

function limpar(){
    let resposta = document.getElementById('res')
    resposta.innerHTML = ''
}

