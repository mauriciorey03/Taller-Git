function sum() {
    var number1 = document.getElementById("input1").value;
    var number2 = document.getElementById("input2").value;
    var sum = parseInt(number1) + parseInt(number2);

    if (sum === 2 || sum === 3 || sum === 5 || sum === 8 || sum === 13 || sum === 21) {
    document.getElementById("imagen1").style.display = "block";
    document.getElementById("imagen2").style.display = "block";
    } else {
    document.getElementById("imagen1").style.display = "none";
    document.getElementById("imagen2").style.display = "none";
    }

    document.getElementById("input3").value = sum;
}

function random1() {
    var number1 = Math.floor(Math.random() * 11) + 1;
    document.getElementById("input1").value = number1;
}

function random2() {
    var number2 = Math.floor(Math.random() * 11) + 1;
    document.getElementById("input2").value = number2;
}

  // Eventos de clic en los botones

document.getElementById("b1").addEventListener("click", random1);
document.getElementById("b2").addEventListener("click", random2);
document.getElementById("b3").addEventListener("click", sum);