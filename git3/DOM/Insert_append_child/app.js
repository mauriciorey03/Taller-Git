// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
    const lista = document.getElementById('miLista');

    // Crear un nuevo elemento de lista <li>
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = 'Nuevo Elemento';
    nuevoElemento.style="color:blue";
    // Agregar el nuevo elemento al final de la lista
    lista.appendChild(nuevoElemento);
}

// Función para mover un elemento dentro de la lista
function moverElemento() {
    const lista = document.getElementById('miLista');
    const elementos = lista.getElementsByTagName('li');

    if (elementos.length >= 2) {
        // Obtener el primer elemento de la lista
        const primerElemento = elementos[0];

        // Mover el primer elemento al final de la lista
        lista.insertBefore(primerElemento, elementos[3]);
    }
}

// Obtener los botones y agregar manejadores de eventos
const botonAgregarElemento = document.getElementById('agregarElemento');
botonAgregarElemento.addEventListener('click', agregarElemento);

const botonMoverElemento = document.getElementById('moverElemento');
botonMoverElemento.addEventListener('click', moverElemento);
