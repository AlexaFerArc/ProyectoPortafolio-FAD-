
document.querySelectorAll('.carrusel').forEach((carrusel) => {
 const slider = carrusel.querySelector('.img-carrusel');
  const dots = carrusel.querySelectorAll('.dot');

  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = slider.children[0].offsetWidth + 20;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });


setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length; // vuelve a 0 al llegar al final
  showSlide(currentIndex);
}, 4000);

});