let dias = document.getElementById("dias")
let resultado = document.getElementById("resultado")

function apertar()
{
    switch(dias.value)
    {
        case "1":
            resultado.innerHTML = "final de semana"
            break;
        case "2":
            resultado.innerHTML = "dia útil"
            break;
        case "3":
            resultado.innerHTML = "dia útil"
            break;
        case "4":
            resultado.innerHTML = "dia útil"
            break;
        case "5":
            resultado.innerHTML = "dia útil"
            break;
        case "6":
            resultado.innerHTML = "dia útil"
            break;
        case "7":
            resultado.innerHTML = "final de semana"
            break;  
        default:
            resultado.innerHTML = "dia inválido"      
    }
}