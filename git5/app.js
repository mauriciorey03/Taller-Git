//Obtener elementos HTML
const inputDescuento = document.getElementById('descuento');
const botonCalcular = document.getElementById('calcular');
const resultados = document.getElementById('resultados');

//Lista de precios
const precios = [20,30,40,50];
//Función para calcular descuento
function calcularDescuento() {
    const descuento = parseFloat(inputDescuento.value);
    const precioConDescuento = precios.map(function(precio, indice) {
        const precioConDescuento = precio - (precio * (descuento/100));
        return precioConDescuento.toFixed(2); //Redondear a 2 decimales
    });
    resultados.innerHTML = '<h2>Precios con descuento: </h2>';
    precioConDescuento.forEach((precio, index) => {
        resultados.innerHTML += `<p> Productos ${index +1 } : ${precio}`;
    });
}

//Agregar evento al botón "Calcular"
botonCalcular.addEventListener('click', calcularDescuento);

const miValor = document.getElementById('miValor')
const divValores = document.getElementById('divValores')

var valores=[]
function agregarValor (){
    const valor = parseFloat(miValor.value);
    valores.push(valor);
    const valoresAAgregar =  valores.map(function(valor){
        const 
    });

}