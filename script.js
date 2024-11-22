document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown-btn');

      button.addEventListener('click', () => {
          // Fecha todos os outros dropdowns
          dropdowns.forEach(d => {
              if (d !== dropdown) {
                  d.classList.remove('active');
              }
          });

          // Alterna o dropdown atual
          dropdown.classList.toggle('active');
      });
  });
});
