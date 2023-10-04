const input_valores = document.getElementById('input_value')
let contador=0
const botonInsertarDatos = document.getElementById('botonInsertarDatos')

botonInsertarDatos.addEventListener("click", function() {
    contador++
    //console.log(contador)
    if(contador==5){
        botonInsertarDatos.disabled = true; 
    }
});


let agregar_var_
let valores_arreglo=[]
valores_arreglo.push(input_valores)

valores_arreglo.map(function(item){
    console.log(item + 1)
})