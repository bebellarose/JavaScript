let fruta = document.getElementById ("Fruta");
let resultado = document.getElementById("resultado")

function apertar()
{
    switch(fruta.value)
    {
    case "banana":
        resultado.innerHTML = "você escolheu banana"
        break;
    case "maçã":
        resultado.innerHTML = "você escolheu maçã"
        break;
    default:
        resultado.innerHTML = "não existe no nosso sistema essa fruta"
    }
}
