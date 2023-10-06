const body = document.querySelector('body')
const btnTheme = document.getElementById('btnTheme')

btnTheme.addEventListener('click',()=>{
    body.classList.toggle('dark')
    if (body.classList.contains('dark')){
        btnTheme.innerText = "Tema Claro"
    }else{
        btnTheme.innerText = "Tema Oscuro"
    }
})