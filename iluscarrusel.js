
const slider = document.querySelector('.imgilus-carrusel');
const puntos = document.querySelectorAll('.punto');

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slider.children[0].offsetWidth + 20; // 
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
  
  puntos.forEach(punto => punto.classList.remove('active'));
  puntos[index].classList.add('active');
}

puntos.forEach((dot, i) => {
  punto.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});
setInterval(() => {
  currentIndex = (currentIndex + 1) % puntos.length; // vuelve a 0 al llegar al final
  showSlide(currentIndex);
}, 4000);