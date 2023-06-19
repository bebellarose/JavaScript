var N1 = document.getElementById("N1"); 
var N2 = document.getElementById("N2");
var Resultado = document.getElementById("Resultado")
var soma;

function somar()
{
    N1.value;
    N2.value;
    soma = parseInt(N1.value) + parseInt(N2.value) ;
    Resultado.innerHTML = soma;
}