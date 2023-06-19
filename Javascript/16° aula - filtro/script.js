function apertar()
{
    let input, ul, li, a, i, filtro
    input = document.getElementById('myinput')
    ul = document.getElementById('myul')
    li = ul.getElementsByTagName('li')
    filtro = input.value.toUpperCase(); //transformar as letras em maiusculo

    for(i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(filtro) > -1)
        {
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
}