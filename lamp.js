var lamp = window.document.getElementById("lamp") //var criada apenas para quebrar a lâmapada
var info = document.getElementById("info") //var para informar a situação atual da lâmpada
var lamp_acts = document.getElementById("lamp_acts") //var relacionada à ações da lâmpada de ligar e desligar
var button = document.getElementById("button") //var relacionada a ações do switch

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

//adicionados dois listeners para eventos no switch da lâmpada
//detalhe: como não sei usar dois "clicks" para o mesmo item eu coloquei um clique duplo para diferenciar ações no switch
button.addEventListener("click", ligar)
button.addEventListener("dblclick", desligar)

//adicionado um listener para um único evento na lâmpada
lamp.addEventListener("click", quebrar)
