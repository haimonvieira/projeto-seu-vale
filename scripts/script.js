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
