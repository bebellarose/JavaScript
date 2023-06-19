let primeironumero = document.getElementById("primeironumero")
let operacao = document.getElementById("operacao")
let segundonumero = document.getElementById("segundonumero")
let resultado = document.getElementById("resultado")

function apertar()
{
    switch(operacao.value)
    {
        case "+":
            resultado.innerHTML = parseInt(primeironumero.value) + parseInt(segundonumero.value)
            break;
        case "-":
            resultado.innerHTML = parseInt(primeironumero.value) - parseInt(segundonumero.value)
            break;
        case "*":
        resultado.innerHTML = parseInt(primeironumero.value) * parseInt(segundonumero.value)
            break;
        case "/":
        resultado.innerHTML = parseInt(primeironumero.value) / parseInt(segundonumero.value)
            break;

    }
}