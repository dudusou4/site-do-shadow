/* ------------------- Botões */
const botaoadd = document.getElementById('Comprar')

botaoadd.addEventListener("click",function(){

    botaoadd.classList.add('remover')

    const modal = document.getElementById('janela')
    modal.classList.add('abrir')
    
    const fechar = document.getElementById('O')
    fechar.addEventListener("click",function(){
        modal.classList.remove('abrir')
        botaoadd.classList.remove('remover')
    })


})

const div1 = document.getElementById('submit')
const Email1 = document.getElementById('email')
const confirmar1 = document.getElementById('Confirmar')
const corretor1 = document.createElement('h1')
corretor1.setAttribute('class', 'corretor1')

confirmar1.addEventListener('click',function(){

    if (Email1.value == ""){
        div1.appendChild(corretor1)
        corretor1.innerHTML = "Não foi possivel confirmar"
        corretor1.style.color = "Red"
        setTimeout(function(){
            corretor1.remove()
            
        }, 2000);

    }
    else{
        div1.appendChild(corretor1)
        corretor1.innerHTML = "Email Confirmado"
        corretor1.style.color = "Green"
        setTimeout(function(){
            corretor1.remove()
            
        }, 2000);

    }
})

const div2 = document.getElementById('confirmador')
const botao2 = document.getElementById('cadastroconfirmar')
const nome1 = document.getElementById('NOME1')
const cpf1 = document.getElementById('CPF1')
const rg1 = document.getElementById('RG1')
const data1 = document.getElementById('DATA1')
const telefone1 = document.getElementById('TELEFONE1')
const email2 = document.getElementById("EMAIL2")
const pagamento1 = document.getElementById("PAGAMENTO1")

botao2.addEventListener('click', function(){

    if (nome1.value == "" && cpf1.value == "" && rg1.value == "" && data1.value == "" && telefone1.value == "" && email2.value == "" && pagamento1.value == ""){


        div2.appendChild(corretor1)
        corretor1.innerHTML = "Ingresso Recusado"
        corretor1.style.color = "White"
        setTimeout(function(){
            corretor1.remove()
            
        }, 2000);

    }

    else if(nome1.value.length > 3 && cpf1.value.length == 11 && rg1.value.length == 7 &&  telefone1.value.length == 11 && pagamento1.value == "Pix"
        || pagamento1.value == "Boleto" || pagamento1.value == "Cartão"
    ){
        div2.appendChild(corretor1)
        corretor1.innerHTML = "Ingresso Confirmado"
        corretor1.style.color = "White"
        setTimeout(function(){
            corretor1.remove()
            
        }, 2000);
    }
    else{
        div2.appendChild(corretor1)
        corretor1.innerHTML = "Ingresso Recusado"
        corretor1.style.color = "White"
        setTimeout(function(){
            corretor1.remove()
            
        }, 2000);
    }

})












/* ------------------- Carrosel */


const imgs = window.document.getElementById('Containe_img')
const img =  window.document.querySelectorAll("#Containe_img img")

let idx = 0

function carrosel(){
    idx++
    const tela = window.innerWidth

    if(idx > img.length - 1){
        idx = 0
    }

        if (tela > 700){
            imgs.style.transform = `translateX(${-idx * 1400}px)`
        }
        else{
            imgs.style.transform = `translateX(${-idx * 700}px)`
        }
}

setInterval(carrosel,1800)



/* ------------------- Timer */



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

    document.getElementById("dias").innerHTML = dias +":"
    document.getElementById("horas").innerHTML = horas+":"
    document.getElementById("minutos").innerHTML = minutos+":"
    document.getElementById("segundos").innerHTML = segundos;

},1000)




