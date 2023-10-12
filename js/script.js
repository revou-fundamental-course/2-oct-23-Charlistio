
function konversi() {
    var celcius = parseFloat(document.getElementById("input").value);
    if (isNaN(celcius)){
        document.getElementById("error-input").innerText= " INVALID INPUT !"

    } else {
    document.getElementById("error-input").innerText=" "
    var fahrenheit = (celcius * 9/5) + 32;
    document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + " Fahrenheit.";
    document.getElementById("calculation").innerHTML = " CALCULATION PROCESS : " + celcius +"°C * (9/5) + 32 = " + fahrenheit.toFixed(2) +"°F";
    }
}

function reset() {
    document.getElementById("error-input").innerText=" "
    document.getElementById("input").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("calculation").innerHTML = "";
}

function reverse() {
    var fahrenheit = parseFloat(document.getElementById("input").value);
    if (isNaN(fahrenheit)) {
        document.getElementById("error-input").innerText=" INVALID INPUT ! "
    } else {
    document.getElementById("error-input").innerText=" "
    var celcius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML = celcius.toFixed(2) + " Celcius.";
    document.getElementById("calculation").innerHTML = " CALCULATION PROCESS : (" + fahrenheit +"°F -32) * (9/5) = " + celcius.toFixed(2) +"°C";
    }
}

