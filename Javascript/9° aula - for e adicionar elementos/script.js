let item = document.getElementById("item")

function add()
{
    // criar um elemento
    let p = document.createElement("li");
    //criar conteúdo
    let texto = document.createTextNode(item.value);
    //adicionar um texto no elemento
    p.appendChild(texto)
    //adicionar no body
    document.getElementById("lista").appendChild(p)
}