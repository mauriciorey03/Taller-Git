// Función para cambiar el texto del elemento con el ID "parrafo"
function cambiarTexto() {
    // Obtener el elemento por su ID
    const elementoParrafo = document.getElementById('parrafo');

    // Cambiar el texto del elemento
    elementoParrafo.textContent = '¡El texto ha sido cambiado!';
}

// Obtener el botón "Cambiar Texto" y agregar un manejador de eventos
const botonCambiarTexto = document.getElementById('cambiarTexto');
botonCambiarTexto.addEventListener('click', cambiarTexto);
