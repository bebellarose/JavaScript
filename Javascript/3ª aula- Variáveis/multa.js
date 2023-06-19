let valorvelocidade = document.getElementById
("valordavelocidade");
let resultadodavelocidade = document.getElementById
("resultadodavelocidade")

function gerarmulta()
{
    if (valorvelocidade.value > 80) {
        let sub = valorvelocidade.value - 80;
        let mult = sub * 5;
        resultadodavelocidade.innerHTML = mult

    } else{
        resultadodavelocidade.innerHTML = "voce não foi multado"
    }
}