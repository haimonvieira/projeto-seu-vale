export function validarFormulario() {
  const formulario = document.querySelector(".formulario__container");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const selectCategoria = document.getElementById("categoria");

  let telefoneDiv = null;
  let campoTelefone = null;

  //Validar enquanto usuario digita
  nome.addEventListener("input", () => validarNome());
  email.addEventListener("input", () => validarEmail());
  mensagem.addEventListener("input", () => validarMensagem());

  //Validar ao enviar o formulario
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const camposValidos = [validarNome(), validarEmail(), validarMensagem(),selectCategoria.value === 'servico' || selectCategoria.value === 'evento' ? validarTelefone() : true].every(Boolean);

    if(camposValidos){
      formulario.submit();
    }
    
  });

  function validarInput(input, mensagem) {
    const itemFormulario = input.parentElement;
    const mensagemDeErro = itemFormulario.querySelector("span");
    mensagemDeErro.innerText = mensagem;
    itemFormulario.classList.add("formulario__container__conteudo--erro");
    return false;
  }

  function validarNome() {
    const nomeValue = nome.value;
    if (nomeValue.trim() === "" || nomeValue.trim().length < 3) {
      return validarInput(nome, "Preencha o nome.");
    } else {
      const itemFormulario = nome.parentElement;
      itemFormulario.classList.remove("formulario__container__conteudo--erro");
    }
    return true;
  }

  function validarEmail() {
    if (!validator.isEmail(email.value)) {
      return validarInput(email, "Email obrigatório.");
    } else {
      const itemFormulario = email.parentElement;
      itemFormulario.classList.remove("formulario__container__conteudo--erro");
    }
    return true;
  }

  function validarMensagem() {
    if (mensagem.value.trim().length < 14) {
      return validarInput(mensagem, "Mensagem deve conter no mínimo 14 caracteres.");
    } else {
      const itemFormulario = mensagem.parentElement;
      itemFormulario.classList.remove("formulario__container__conteudo--erro");
    }
    return true;
  }

  function validarTelefone() {

    if(!campoTelefone){
      return true;
    }

    let telefoneValido = campoTelefone.value.trim().length === 11;

    if (!telefoneValido && campoTelefone.value.trim().length > 0) {
      return validarInput(
        campoTelefone,
        "Digite um número de celular válido com DDD."
      );
    } else {
      const itemFormulario = campoTelefone.parentElement;
      itemFormulario.classList.remove("formulario__container__conteudo--erro");
    }

    return true;
  }

  //Para tirar o campo telefone do formulario

  selectCategoria.addEventListener("change", () => {
    const containerCategoria = selectCategoria.closest(
      ".formulario__container__conteudo"
    );

    if (
      selectCategoria.value === "servico" ||
      selectCategoria.value === "evento"
    ) {
      if (!telefoneDiv) {
        telefoneDiv = document.createElement("div");
        telefoneDiv.className = "formulario__container__conteudo";
        telefoneDiv.innerHTML = `<label for="telefone">Telefone</label>
      <input type="tel" id="telefone" name="telefone" placeholder="Seu Telefone" maxlength="11">
      <span></span>`;
        containerCategoria.insertAdjacentElement("afterend", telefoneDiv);
        campoTelefone = document.getElementById("telefone");
        campoTelefone.addEventListener("input", validarTelefone);
      }
    } else if (telefoneDiv) {
      telefoneDiv.remove();
      telefoneDiv = null;
      campoTelefone = null;
    }
  });
}
