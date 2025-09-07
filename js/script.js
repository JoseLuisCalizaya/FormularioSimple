console.log("Script cargado correctamente");

const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evita que se recargue la página

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;

  // Mostrar los datos
  resultado.innerHTML = `
    <h3>Información Ingresada:</h3>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Correo electrónico:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${telefono ? telefono : 'No ingresado'}</p>
  `;

  resultado.style.display = 'block';
});


