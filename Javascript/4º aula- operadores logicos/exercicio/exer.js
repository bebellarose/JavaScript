let salario = document.getElementById("salario")
let anos = document.getElementById("anos")

function apertar()
{
    if(salario.value >= 3000 && anos.value >= 5 )
    {
    alert("Você terá que pagar impostos")
    }
    else{
    alert("Você não pagará impostos")
    }
}