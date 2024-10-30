const data = document.getElementById("data")
const horario = document.getElementById("hora")

const datareal = new Date()
let dia = datareal.getDate()
let mes = datareal.getDay()
const datar = dia+""+mes+""+ datareal.getFullYear()

data.innerHTML = datareal