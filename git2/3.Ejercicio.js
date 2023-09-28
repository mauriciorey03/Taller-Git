let num = 0;
// Función para agregar un nuevo campo (etiqueta y caja de texto) al formulario
function agregarCampo() {
  const formulario = document.getElementById('miFormulario');

  // Crear una nueva etiqueta <label>
  const label = document.createElement('label');
  num = num+1;
  label.textContent = 'Etiqueta ' + (num) + ': ';

  // Crear una nueva caja de texto <input>
  const textarea = document.createElement('textarea');
  textarea.type = 'text';
  textarea.name = 'campo_' + (num);

  // Agregar la etiqueta y la caja de texto al formulario
  formulario.appendChild(label);
  formulario.appendChild(textarea);

}

function eliminarCampo() {
  // Eliminar un elemento
  const elemento = document.getElementsByName('campo_'+num)
  formulario.removeChild(elemento)
}

// Obtener el botón de "Agregar Campo" y agregar un manejador de eventos
// const botonAgregarCampo = document.getElementById('agregarCampo');
// botonAgregarCampo.addEventListener('click', agregarCampo);
