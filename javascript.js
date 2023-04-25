// variaveis (id= html)

const calcular = document.getElementById('calcular')


//funcao do botao
function imc(){
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !=='' && peso !==''){
        //variavel 
        const valorIMC = (peso / (altura*altura)).toFixed(2)
        let classificacao = ''

        if( valorIMC < 18.5){
            classificacao = 'Abaixo do peso'
        }
        else if( valorIMC <25){
            classificacao = 'no Peso ideal'
        }
        else if( valorIMC <30){
            classificacao = 'Acima do peso'
        }
        else if( valorIMC < 35){
            classificacao = 'com Obesidade grau I'
        }
        else if( valorIMC < 40){
            classificacao = 'com Obesidade grau II'
        } else{
            classificacao = 'com Obesidade grau III, CUIDADO!'
        }
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} você esta ${classificacao} `
    } else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}
calcular.addEventListener("click", imc)