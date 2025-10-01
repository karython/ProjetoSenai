function toggleDetalhes(numero) {
  const detalhes = document.getElementById(`detalhes${numero}`);

  // Fecha todos os outros detalhes
  for (let i = 1; i <= 6; i++) {
    if (i !== numero) {
      const outroDetalhes = document.getElementById(`detalhes${i}`);
      if (outroDetalhes) {
        outroDetalhes.classList.remove("active");
      }
    }
  }

  // Alterna o detalhes clicado
  if (detalhes) {
    detalhes.classList.toggle("active");
  }
}
