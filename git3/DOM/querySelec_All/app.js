// Función para cambiar el estilo de todos los elementos con la clase "item"
function cambiarEstilo() {
    // Seleccionar todos los elementos con la clase "item" usando querySelectorAll
    const elementos = document.querySelectorAll('.item');

    // Cambiar el estilo de todos los elementos
    elementos.forEach(function(elemento) {
        elemento.style.backgroundColor = 'lightblue';
        elemento.style.fontWeight = 'bold';
    });
}

// Obtener el botón "Cambiar Estilo" y agregar un manejador de eventos
const botonCambiarEstilo = document.getElementById('cambiarEstilo');
botonCambiarEstilo.addEventListener('click', cambiarEstilo);
