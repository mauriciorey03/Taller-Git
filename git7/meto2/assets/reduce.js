
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

const pShow = document.getElementById('show')

const btnShow = document.getElementById('btnShow')

btnShow.addEventListener('click',()=>{
    pShow.innerText=sumWithInitial
})