// Función para cambiar el estilo del párrafo con la clase "parrafo"
function cambiarEstilo() {
    // Seleccionar el párrafo por su clase usando querySelector
    let parrafo = document.querySelector('.parrafo');

    // Cambiar el estilo del párrafo
    parrafo.style.backgroundColor = 'lightblue';
    parrafo.style.fontWeight = 'bold';
}

// Obtener el botón "Cambiar Estilo" y agregar un manejador de eventos
const botonCambiarEstilo = document.getElementById('cambiarEstilo');
botonCambiarEstilo.addEventListener('click', cambiarEstilo);
