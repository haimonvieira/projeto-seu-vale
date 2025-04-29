const body = document.querySelector("body");
const menu__check = document.querySelector(".menu__check");

menu__check.addEventListener("click", () => {

    if(menu__check.checked){
        body.classList.add('body-sem-rolagem');
    }else{
        body.classList.remove('body-sem-rolagem');
    }

})