/// MENU RESPONSIVO
document.addEventListener('DOMContentLoaded', function () {
    const btNav = document.querySelector('#btNav');
    const navMobile = document.querySelector('.navMobile');
    const icon = btNav.querySelector('i');
    const menuItems = document.querySelectorAll('.menuMobile button');
  
    let menuAberto = false;
  
    btNav.addEventListener('click', function () {
      if (menuAberto) {
        // Fecha o menu
        navMobile.style.maxHeight = '0px';
        navMobile.style.visibility = 'hidden';
        icon.style.transform = 'rotate(0deg)';
      } else {
        // Abre o menu
        navMobile.style.maxHeight = '300px'; // ajuste conforme o tamanho do menu
        navMobile.style.visibility = 'visible';
        icon.style.transform = 'rotate(90deg)';
      }
      menuAberto = !menuAberto;
    });
  
    // Fecha o menu quando clicar em um item
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        navMobile.style.maxHeight = '0px';
        navMobile.style.visibility = 'hidden';
        icon.style.transform = 'rotate(0deg)';
        menuAberto = false;
      });
    });
  });
  
  /// SLIDE 
  document.querySelectorAll('.slider-container').forEach(container => {
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const slider = container.querySelector('.slider');
    let currentIndex = 0;
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
      updateSlider();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slider.children.length;
      updateSlider();
    });
  
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });
  
