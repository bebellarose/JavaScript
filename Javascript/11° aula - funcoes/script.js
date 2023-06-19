function mult(a,b)
{
    return a*b
}

let mult = (a,b) =>
{

}
//Sintese da função é definida com a function palavra-chave, seguida por um nome, seguido por parênteses().
//Quando o JavaScript atinge uma return instruçoes, a função para ser executada.
//Se a função foi invocada a partir de uma instrução, o JavaScript "retornará" para o executar o código após instrução invocada.
let celsius = document.getElementById("Celsius")
let resultado = document.getElementById("resultado")

function toCelsius()
{
    return resultado.innerHTML = (celsius.value*1.8) + 32
}

//crie uma funcao no qual utilize parametros para descobrir se umvalor é par ou ímpar

function soma(x,y)
{
    return x + y
}

function par(e)
{
    if(e % 2 == 0)
    {
        return console.log("par")
    }
    else
    {
        return console.log("impar")
    }
}

//escreva uma funçao que retorne o maior de dois números

function maior(m,r)
{
    if(m > r)
    {
        return console.log(m)
    }
    else{
        return console.log(r)
    }
}

const maior = (m,r) => {m>r? console.log(m) : console.log(r)}