let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let resultado = document.getElementById('resultado')
let media;

function somar() 
{
    if(n1.value, n2.value, n3.value, n4.value >= 7 ) {
    media= (parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value) + parseInt(n4.value)) /4
    resultado.innerHTML = "Isabella Souza você foi aprovada"
    } 
    else{
        resultado.innerHTML = "Isabella Souza você foi reprovada"
    }
}

