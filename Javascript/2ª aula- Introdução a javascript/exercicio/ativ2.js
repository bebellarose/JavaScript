var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var resultado = document.getElementById("resultado");
var multi;

function mult()
{
    n1.value;
    n2.value;
    n3.value;
    n4.value;
    multi = parseInt(n1.value) * parseInt(n2.value) * parseInt(n3.value) * parseInt(n4.value);
    resultado.innerHTML = multi;
}
