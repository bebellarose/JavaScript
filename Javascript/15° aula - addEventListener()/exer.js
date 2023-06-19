let resultado = document.getElementById('resultado')
let altura = document.getElementById('altura')
let base = document.getElementById('base')


function apertar()
{
    resultado.innerHTML = (parseFloat(altura.value)*parseFloat(base.value)) /2
}