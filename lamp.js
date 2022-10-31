var lamp = window.document.getElementById("lamp")
var info = document.getElementById("info")
var lamp_acts = document.getElementById("lamp_acts")
var button = document.getElementById("button")

function ligar() {
    info.innerHTML = "Lâmpada ligou!"
    info.style.color = "green"
    lamp_acts.src = "./img/ligada.jpg";
    button.src = "./img/switch_on.png"
}
function desligar() {
    info.innerHTML = "Lâmpada desligou!"
    info.style.color = "red"
    lamp_acts.src = "./img/desligada.jpg";
    button.src = "./img/switch_off.png"
}
function quebrar() {
    info.innerHTML = "Lâmpada quebrou!"
    info.style.color = "orange"
    lamp_acts.src = "./img/quebrada.jpg"
    button.src = "./img/switch_off.png"
}

button.addEventListener("click", ligar)
button.addEventListener("dblclick", desligar)
lamp.addEventListener("click", quebrar)