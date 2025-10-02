      function toggleDetalhes(numero) {
        const detalhes = document.getElementById(`detalhes${numero}`);
        const passo = detalhes.closest('.passo');

        // Fecha todos os outros detalhes
        for (let i = 1; i <= 6; i++) {
          if (i !== numero) {
            const outroDetalhes = document.getElementById(`detalhes${i}`);
            if (outroDetalhes) {
              outroDetalhes.classList.remove("active");
              const outroPasso = outroDetalhes.closest('.passo');
              if (outroPasso) {
                outroPasso.classList.remove("expanded");
              }
            }
          }
        }

        // Alterna o detalhes clicado
        if (detalhes) {
          const isActive = detalhes.classList.contains("active");
          detalhes.classList.toggle("active");
          
          if (!isActive) {
            passo.classList.add("expanded");
          } else {
            passo.classList.remove("expanded");
          }
        }
      }