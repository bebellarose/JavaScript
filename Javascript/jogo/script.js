let NomeDojogador;
let Resposta;

NomeDojogador = document.getElementById("NomeDoJogador");
Resposta = document.getElementById("resposta");

function EnviarNome()
{
    if(NomeDojogador.value =="")
    {
        alert("Insira um nome")
    }
    else{
    Resposta.innerHTML = "Olá," + NomeDoJogador.value + ". Vamos jogar!"
    }
}