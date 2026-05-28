let servicoSelecionado = "";

// Selecionar serviço
function selecionarServico(elemento, servico) {

  // remove seleção anterior
  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("selecionado");
  });

  // adiciona seleção atual
  elemento.classList.add("selecionado");

  // salva serviço
  servicoSelecionado = servico;

  console.log(servicoSelecionado);
}

// WhatsApp
function irParaWhatsapp() {

  if (!servicoSelecionado) {
    alert("Selecione um serviço antes de continuar.");
    return;
  }

  const telefone = "5581986114459";

  const mensagem =
`Olá! Tenho interesse no serviço:

${servicoSelecionado}

Gostaria de mais informações.`;

  const link =
`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}
