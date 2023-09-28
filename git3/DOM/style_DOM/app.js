// Función para cambiar el estilo del párrafo cuando se hace clic en el botón
function cambiarEstilo() {
    // Obtener el párrafo por su ID
    const parrafo = document.getElementById('miParrafo');

    // Cambiar el estilo del párrafo utilizando el atributo "style"
    parrafo.style.backgroundColor = 'lightblue';
    parrafo.style.color = 'red';
    parrafo.style.fontWeight = 'bold';
    
}

// Obtener el botón "Cambiar Estilo" y agregar un manejador de eventos
const botonCambiarEstilo = document.getElementById('cambiarEstilo');
botonCambiarEstilo.addEventListener('click', cambiarEstilo);
