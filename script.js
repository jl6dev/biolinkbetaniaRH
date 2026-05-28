let servicoSelecionado = "";

function selecionarServico(elemento, servico) {
  // remove seleção anterior
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('selecionado');
  });

  // marca o atual
  elemento.classList.add('selecionado');
  servicoSelecionado = servico;
}

function irParaWhatsapp() {
  if (servicoSelecionado === "") {
    alert("Por favor, selecione um serviço antes de continuar.");
    return;
  }

  const mensagem = 
    `Olá! Tenho interesse no serviço de ${servicoSelecionado}. Gostaria de mais informações.`;

  const telefone = "+5581986114459"; // TROQUE AQUI
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
// ENVIO DE CURRÍCULO
document
  .getElementById("formCurriculo")
  .addEventListener("submit", function(e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const vaga = document.getElementById("vaga").value;

    alert(
      `Currículo enviado com sucesso!\n\nNome: ${nome}\nÁrea: ${vaga}`
    );

    // limpa formulário
    this.reset();
});
