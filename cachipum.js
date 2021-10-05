// Escuchar botones y dispara funciones
var p = document.getElementById("bPiedra");
p.addEventListener("click", piedra);
var pa = document.getElementById("bPapel");
pa.addEventListener("click", papel);
var t = document.getElementById("bTijera");
t.addEventListener("click", tijera);

//escribir en html
var res = document.getElementById("res");
res.innerHTML="";

//variables
var cachiCompu;
var cachi;

//funciones de los botones
function piedra(){
  cachi = "piedra";
  random();
  cachipum();
}
function papel(){
  cachi = "papel";
  random();
  cachipum();
}
function tijera(){
  cachi = "tijera";
  random();
  cachipum();
}

//numero aleatorio
function random() {
  var aleatorio;
  aleatorio = Math.floor((Math.random()*3) + 1);
  console.log(aleatorio);
  switch (aleatorio) {
    case 1:
    cachiCompu = "piedra";
      break;
    case 2:
    cachiCompu = "papel";
      break;
    case 3:
    cachiCompu = "tijera";
      break;
  }
}

//quien gana?
function cachipum(){
  switch (true) {
    case (cachi == cachiCompu):
      resultado("EMPATE");
      break;
    case (cachi == "tijera" && cachiCompu =="papel"):
      resultado("GANASTE");
      break;
    case(cachi == "piedra" && cachiCompu =="tijera") :
      resultado("GANASTE");
      break;
    case (cachi == "papel" && cachiCompu =="piedra") :
      resultado("GANASTE");
      break;
    case (cachi == "tijera" && cachiCompu =="piedra") :
      resultado("PERDISTE");
      break;
    case (cachi == "piedra" && cachiCompu =="papel") :
      resultado("PERDISTE");
      break;
    case (cachi == "papel" && cachiCompu =="tijera") :
      resultado("PERDISTE");
      break;
  }
}

//escribir resultados
function resultado(result){
  res.innerHTML = "<p> VOS-------------------------------------------COMPUTADORA </p> </br>";
  res.innerHTML += "<img src="+ cachi +".png>   <img src=vs.png><img src=" +cachiCompu+".png>  <br/>";
  res.innerHTML += "<h2>"+result+"</h2><br/>";
}
