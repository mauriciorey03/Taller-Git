// Función para agregar estilos al párrafo
function agregarEstilos() {
    // Obtener el párrafo por su ID
    const parrafo = document.getElementById('miParrafo');

    // Acceder a los estilos actuales
    const estilosActuales = window.getComputedStyle(parrafo);

    // Obtener el color actual del texto y convertirlo en rojo
    const colorActual = estilosActuales.getPropertyValue('color');
    const nuevoColor = (colorActual === 'rgb(255, 0, 0)') ? 'blue' : 'red';

    // Agregar estilos sin reemplazar los existentes
    parrafo.style.backgroundColor = 'lightblue';
    parrafo.style.color = nuevoColor;
    parrafo.style.fontSize = '18px'; // Agregar un nuevo estilo

    // Puedes seguir añadiendo más estilos aquí según tus necesidades
}

// Obtener el botón "Agregar Estilos" y agregar un manejador de eventos
const botonAgregarEstilos = document.getElementById('agregarEstilos');
botonAgregarEstilos.addEventListener('click', agregarEstilos);
