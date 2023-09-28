// Función para agregar un nuevo campo (etiqueta y caja de texto) al formulario
function agregarCampo() {
  const formulario = document.getElementById('miFormulario');

  // Crear una nueva etiqueta <label>
  const label = document.createElement('label');
  label.textContent = 'Etiqueta ' + (formulario.children.length + 1) + ': ';

  // Crear una nueva caja de texto <input>
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'campo' + (formulario.children.length + 1);

  // Agregar la etiqueta y la caja de texto al formulario
  formulario.appendChild(label);
  formulario.appendChild(input);
  

}

// Obtener el botón de "Agregar Campo" y agregar un manejador de eventos
const botonAgregarCampo = document.getElementById('agregarCampo');
botonAgregarCampo.addEventListener('click', agregarCampo);
