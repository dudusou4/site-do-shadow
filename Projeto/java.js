const imgs = window.document.getElementById('Containe_img')
const img =  window.document.querySelectorAll("#Containe_img img")

let idx = 0

function carrosel(){
    idx++

    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 700}px)`
}

setInterval(carrosel, 1800)


var datafutura = new Date("November 13, 2024 20:00").getTime();
var dias,horas,minutos,segundos;

setInterval(function(){

    var dataatual = new Date().getTime();
    var segundosTotal = (datafutura - dataatual) / 1000;

    dias = parseInt(segundosTotal/86400);
    segundosTotal = segundosTotal%86400;

    horas = parseInt(segundosTotal/3600);
    segundosTotal = segundosTotal%3600;

    minutos = parseInt(segundosTotal/60);
    segundos = parseInt(segundosTotal%60);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

},1000)

