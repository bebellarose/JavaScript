var metro = document.getElementById("metro");
var resultado = document.getElementById("resultado")
var cm;

function transformar()
{
    metro.value
    cm = parseInt(metro.value) * 100;
    resultado.innerHTML = cm
}