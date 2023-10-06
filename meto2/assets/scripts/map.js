const input_valores = document.getElementById('input_value')
let contador=0
const botonInsertarDatos = document.getElementById('botonInsertarDatos')
const show = document.getElementById('showArray')
const btnAction = document.getElementById('btnAction')
const bxActions = document.getElementById('box-p')
const showResult = document.getElementById('showResult')

let valores_arreglo=[]

botonInsertarDatos.addEventListener("click", ()=>{
    contador++
    valores_arreglo.push(parseFloat(input_valores.value))
    if(contador==5){
        botonInsertarDatos.disabled = true; 
    }
    input_valores.value = ''
    show.innerText = valores_arreglo
});


btnAction.addEventListener('click',()=>{
    const action = bxActions.value
    let newArray
    if (action==='sumar'){
        newArray = valores_arreglo.map((item)=>item+2)
    }
    if (action==='restar'){
        newArray = valores_arreglo.map((item)=>item-2)
    }
    if (action==='multiplicar'){
        newArray = valores_arreglo.map((item)=>item*2)
    }
    showResult.innerText = newArray
})


