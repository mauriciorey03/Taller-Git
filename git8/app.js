const saludar = document.getElementById('micajita')
const plasmar = document.getElementById('mi_conservacion')

let miarray


function salut (){
    alert('Hola ' + saludar.value)
    plasmar.innerHTML+=`${saludar.value}<br>`
    miarray.push(saludar.value)
    localStorage.setItem('conserva_nombre',JSON.stringify(miarray)) // esta monda es lo que guara el array
    console.log(miarray)
    saludar.value=""
}

/* window.addEventListener("load",()=>{
    const conservar_datos_cargados = localStorage.getItem('conserva_nombre')
    if (conservar_datos_cargados){
        saludar.value=conservar_datos_cargados
    }
}) */

miarr=[1,2,3]

window.addEventListener("load",()=>{
    //const conservar_datos_cargados = localStorage.getItem('conserva_nombre')
    const conservar_datos_cargados = JSON.parse(localStorage.getItem('conserva_nombre'))

    if (conservar_datos_cargados){
        conservar_datos_cargados.forEach(element => {
            plasmar.innerHTML+=`${element}<br>`
        });
        miarray= conservar_datos_cargados
    }else{
        miarray= []
    }
})