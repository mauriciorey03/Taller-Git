// Función para cambiar el estilo de los elementos con la clase "destacado"
function cambiarEstilo() {
    // Obtener todos los elementos con la clase "destacado"
    const elementosDestacados = document.getElementsByClassName('destacado');
    // Iterar a través de los elementos y cambiar su estilo
    for (let i = 0; i < elementosDestacados.length; i++) {
        const elemento = elementosDestacados[i];
        elemento.style.backgroundColor = 'yellow';
        elemento.style.fontWeight = 'bold';
    }
}

// Obtener el botón "Cambiar Estilo" y agregar un manejador de eventos
const botonCambiarEstilo = document.getElementById('cambiarEstilo');
botonCambiarEstilo.addEventListener('click', cambiarEstilo);
