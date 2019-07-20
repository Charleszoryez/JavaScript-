var calculador = {
punto: document.getElementById("punto"),
uno: document.getElementById("1"),
dos: document.getElementById("2"),
tres: document.getElementById("3"),
cuatro: document.getElementById("4"),
cinco: document.getElementById("5"),
seis: document.getElementById("6"),
siete: document.getElementById("7"),
ocho: document.getElementById("8"),
nueve: document.getElementById("9"),
cero: document.getElementById("0"),
suma: document.getElementById("mas"),
resta: document.getElementById("menos"),
multiplicacion: document.getElementById("por"),
division: document.getElementById("dividido"),
on: document.getElementById("on"),
igual: document.getElementById("igual"),
pantalla: document.getElementById("display"),
init: function () {
calculador.pantalla.textContent = "0"
this.punto.addEventListener("click", function (e) {
//colocas en la pantalla
});

this.punto.onclick = function (e) {
//colocas en la pantalla
calculador.pantalla.textContent += "."
}
this.uno.onclick = function (e){
  calculador.pantalla.textContent += "1"
}
this.dos.onclick = function(e){
  calculador.pantalla.textContent += "2"
}
this.tres.onclick = function(e){
  calculador.pantalla.textContent += "3"
}
this.cuatro.onclick = function(e){
  calculador.pantalla.textContent += "4"
}
this.cinco.onclick = function(e){
  calculador.pantalla.textContent += "5"
}
this.seis.onclick = function(e){
  calculador.pantalla.textContent += "6"
}
this.siete.onclick = function(e){
  calculador.pantalla.textContent += "7"
}
this.ocho.onclick = function(e){
  calculador.pantalla.textContent += "8"
}
this.nueve.onclick = function(e){
  calculador.pantalla.textContent += "9"
}
this.cero.onclick = function(e){
  calculador.pantalla.textContent += "0"
}


}
}


var list = document.getElementsByClassName("tecla");
  for (let i=0; i<list.length; i++){
    list[i].onmousedown = function(){
      list[i].style.transform = "scale(0.85,0.85)";
    }
    list[i].onmouseleave = function(){
      list[i].style.transform = "scale(1,1)";
    }
    list[i].onmouseup = function(){
      list[i].style.transform = "scale(1,1)"
    }
  }

calculador.init();
