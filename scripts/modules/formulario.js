export function validarFormulario() {
  const formulario = document.querySelector(".formulario__container");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    validarNome();
    validarEmail();
    validarMensagem();
  });

  function validarInput(input, mensagem) {
    const itemFormulario = input.parentElement;
    const mensagemDeErro = itemFormulario.querySelector("span");
    mensagemDeErro.innerText = mensagem;
    itemFormulario.classList.add("formulario__container__conteudo--erro");
  }

  function validarNome() {
    const nomeValue = nome.value;
    if (nomeValue.trim() === "" || nomeValue.trim().length < 3) {
      validarInput(nome, "Preencha o nome.");
    } else {
      const itemFormulario = nome.parentElement;
      itemFormulario.classList.remove("formulario__container__conteudo--erro");
    }
  }

  function validarEmail() {
    if (!validator.isEmail(email.value)) {
      validarInput(email, "Email obrigatório.");
    } else {
      const itemFormulario = email.parentElement;
      itemFormulario.classList.remove("formulario__container__conteudo--erro");
    }
  }

  function validarMensagem(){

    if(mensagem.value.trim() < 14){
      validarInput(mensagem, 'Mensagem deve conter no mínimo 14 caracteres.');
    }else{
      const itemFormulario = mensagem.parentElement;
      itemFormulario.classList.remove('formulario__container__conteudo--erro');
    }

  }

}
