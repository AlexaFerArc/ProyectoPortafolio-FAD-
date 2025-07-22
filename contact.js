document.getElementById('contact_form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const nombre = document.getElementById('name').value.trim();
  const email = document.getElementById('mail').value.trim();
  const mensaje = document.getElementById('msg').value.trim();
  const respuesta = document.getElementById('answer');

  
  if (!name || !mail || !msg) {
    respuesta.textContent = 'Por favor, completa el formulario';
    respuesta.style.color = 'red';
    return;
  }

 
  respuesta.textContent = '¡Gracias por contactarme! Me pondre en contacto contigo a la brevedad';
  respuesta.style.color = 'green';

  
  this.reset();
});