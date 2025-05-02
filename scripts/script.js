const body = document.querySelector("body");
const menu__check = document.querySelector(".menu__check");
const navegacaoMobileLista = document.querySelector(".cabecalho__navegacao__mobile__lista");


menu__check.addEventListener("click", () => {

    if(menu__check.checked){
        body.classList.add('body-sem-rolagem');
    }else{
        body.classList.remove('body-sem-rolagem');
    }

});


//Adicionar a classe ativo ao link clicado
document.addEventListener("DOMContentLoaded", () => {

    //Pegar todos os links da navegação
    const links = document.querySelectorAll('.cabecalho__navegacao__lista__item__link');

    //Para cada link da navegação
    links.forEach(link => {

        //Se o link clicado for o link atual
        if(link.href === window.location.href){
            //Adicionar a classe ativo ao link clicado
            link.classList.add('ativo');
        }

    });

});
