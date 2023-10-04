const valor_a = document.getElementById("a")
const valor_b = document.getElementById("b")
const valor_c = document.getElementById("c")

const span_a = document.getElementById("va")
const span_b = document.getElementById("vb")
const span_c = document.getElementById("vc")
const span_x1 = document.getElementById("resultado_x1")
const span_x2 = document.getElementById("resultado_x2")

function calcular(){
    const a = parseFloat(valor_a.value);
    const b = parseFloat(valor_b.value);
    const c = parseFloat(valor_c.value);
    
    // let validacion = ((b*b)-(4*a*c))
    let validacion = Math.pow(b,2) - 4*a*c

    if (valor_a.value=='' || valor_b.value=='' || valor_c.value=='')
    {
        alert('Por favor ingrese un valor')
    } else if (a==0){
        alert('a no puede ser igual a 0')
    } else if (validacion < 0){
        alert('la ecuación no posible')
    } else {

        var resultado_x1 = (-b + Math.sqrt(validacion))/(2*a)
        // var resultado_x1 = (-b + Math.pow(validacion,(0.5)))/(2*a)
        var resultado_x2 = (-b - Math.sqrt(validacion))/(2*a)

        console.log(resultado_x1)
        console.log(resultado_x2);
    }

    span_a.textContent=a
    span_b.textContent=b
    span_c.textContent=c

    span_x1.textContent=resultado_x1.toFixed(2) //aproxima
    span_x2.textContent=resultado_x2.toFixed(2) //aproxima

    // const info = document.createElement("p")
    // info.setAttribute("id","miNuevoID")
    // info.textContent = `asdf ${doble}`
    // salida.appendChild(info)
}