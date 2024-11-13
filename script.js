

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os itens de menu com dropdown
    const items = document.querySelectorAll(".menu .item");
  
    items.forEach(item => {
      item.addEventListener("click", function() {
        // Fecha qualquer outro dropdown aberto
        items.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            otherItem.querySelector(".sub-menu").classList.remove("active");
          }
        });
  
        // Alterna o estado do dropdown clicado
        item.classList.toggle("active");
        item.querySelector(".sub-menu").classList.toggle("active");
      });
    });
  });
  