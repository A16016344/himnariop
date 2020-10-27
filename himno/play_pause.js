var boton = document.getElementById("boton");
var v = document.getElementsByTagName("audio")[0];
var sound = false;
var num_000;
var num_next = num_himno+1;
var num_prev = num_himno-1;
var favorito = localStorage.getItem("fav"+num_himno);
var modoNoche = localStorage.getItem("modoNoche");

//Recolorear la página
var colorEnfasis = localStorage.getItem("colorEnfasis")
var temaPagina = localStorage.getItem("temaPagina")
switch (colorEnfasis) {
	case "rojo":
		colorPrimario = "#F44336"
		colorPrimarioOscuro = "#D32F2F"
		colorPrimarioClaro = "#FFCDD2"
		colorAcento = "#FF5252"
		break;
	case "indigo":
		colorPrimario = "#3F51B5"
		colorPrimarioOscuro = "#303F9F"
		colorPrimarioClaro = "#C5CAE9"
		colorAcento = "#536DFE"
		break;
	case "verde":
		colorPrimario = "#4CAF50"
		colorPrimarioOscuro = "#388E3C"
		colorPrimarioClaro = "#C8E6C9"
		colorAcento = "#8BC34A"
		break;
	case "naranja":
		colorPrimario = "#FF9800"
		colorPrimarioOscuro = "#F57C00"
		colorPrimarioClaro = "#FFE0B2"
		colorAcento = "#FF5722"
		break;
	case "rosa":
		colorPrimario = "#E91E63"
		colorPrimarioOscuro = "#C2185B"
		colorPrimarioClaro = "#F8BBD0"
		colorAcento = "#FF4081"
		break;
	case "azul":
		colorPrimario = "#2196F3"
		colorPrimarioOscuro = "#1976D2"
		colorPrimarioClaro = "#BBDEFB"
		colorAcento = "#03A9F4"
		break;
	case "gris":
		colorPrimario = "#607D8B"
		colorPrimarioOscuro = "#455A64"
		colorPrimarioClaro = "#CFD8DC"
		colorAcento = "#9E9E9E"
		break;
	case "amarillo":
		colorPrimario = "#FFC107"
		colorPrimarioOscuro = "#FFA000"
		colorPrimarioClaro = "#FFECB3"
		colorAcento = "#FFEB3B"
		break;
	case "verdeClaro":
		colorPrimario = "#8BC34A"
		colorPrimarioOscuro = "#689F38"
		colorPrimarioClaro = "#DCEDC8"
		colorAcento = "#CDDC39"
		break;
	default:
		colorPrimario = "#333"
		colorPrimarioOscuro = "#000"
		colorPrimarioClaro = "#666"
		colorAcento = "#999"
		break;
}
switch (temaPagina) {
	case "claro":
		colorTexto = "#212121"
		colorFondoBody = "#BDBDBD"
		colorFondoSection = "#FFFFFF"
		break;
	case "oscuro":
		colorTexto = "#FFFFFF"
		colorFondoBody = "#757575"
		colorFondoSection = "#212121"
		break;
	default:
		colorTexto = "#FFFFFF"
		colorFondoBody = "#757575"
		colorFondoSection = "#212121"
		break;	
}
var nuevoEstilo = document.createElement('style');
nuevoEstilo.appendChild(document.createTextNode(`
	body{color:${colorTexto};background:${colorFondoBody};}
	section{background:${colorFondoSection}}
	.header{background:${colorPrimario}}
	.nav{background:${colorPrimario}}
	.nav__focus{background:${colorPrimarioOscuro}; border-bottom:5px solid ${colorAcento}}
	.button{background:${colorPrimario}}
	h2{color:${colorPrimario}}
	.link{background:${colorPrimarioClaro}}
	.link:hover{background:${colorAcento}}
`));
document.body.appendChild(nuevoEstilo);

// Modificar Botón Atras para ir a la ultima pagina principal.
var back_to = localStorage.getItem("back_to");
var back_button = document.getElementsByTagName("a")[0];
if (back_to != null){
	back_button.href = back_to;
}

document.querySelector('.header__title').textContent = titulo;
document.querySelector('title').textContent = num_himno+". "+titulo+" | Sólo a Dios la Gloria";
document.querySelector('.titulo').innerHTML = `<button id='addFav' class='botonF2'><span  class='flaticon-star'></span></button> Himno ${num_himno}. ${titulo}<br><center> <button class='proyectar' onclick='convert_to_slides();launchFullScreen(document.documentElement);'><span class='flaticon-television'></span></button> <button class='proyectar' style='background-color: green;' onclick='launchFullScreen(document.documentElement);show_partiture();'><span class='flaticon-music-player-1'></span></button> <button class="proyectar" style="background-color: darkblue;" onclick="javascript:window.print();"><span class='flaticon-print'></span></button></center>`;
document.querySelector('.header__num').textContent = num_himno;

var addFav = document.getElementById("addFav");

function launchFullScreen(element) {
	if(element.requestFullScreen) {
	  element.requestFullScreen();
	} else if(element.mozRequestFullScreen) {
	  element.mozRequestFullScreen();
	} else if(element.webkitRequestFullScreen) {
	  element.webkitRequestFullScreen();
	}
  }

function aniadirCeros(numeroSinCeros){
	var numConCeros
	if (numeroSinCeros >= 100) {
		numConCeros = numeroSinCeros;
	} else if (numeroSinCeros >= 10) {
		numConCeros = "0"+numeroSinCeros;
	} else {
		numConCeros = "00"+numeroSinCeros;
	}
	return numConCeros
}

num_000 = aniadirCeros(num_himno);
num_prev = aniadirCeros(num_prev);
num_next = aniadirCeros(num_next);

document.querySelector('audio').src = "https://a16016344.github.io/himnariop/himno/mp3/"+num_000+".mp3";
document.querySelector('audio').setAttribute('preload','auto');
document.querySelector('.next_himno').href = num_next+".html"
document.querySelector('.prev_himno').href = num_prev+".html"

if (favorito == "true"){
	document.querySelector('.botonF2').classList.add('favorito');
}

addFav.addEventListener("click", function(){
	if (favorito == "true"){
		localStorage.setItem("fav"+num_himno,false);
		document.querySelector('.botonF2').classList.remove('favorito');	
		favorito = "false";
	} else {
		localStorage.setItem("fav"+num_himno,true);
		localStorage.setItem('nombre_himno'+num_himno,titulo);
		document.querySelector('.botonF2').classList.add('favorito');
		favorito = "true";
	}
});



v.onloadedmetadata = function(){
	boton.style.display = "inline-block";
}
v.oncanplaythrough = function(){
	boton.style.backgroundColor = "green";
}
v.addEventListener("ended", function(){
	sound = false;
	document.querySelector('.flaticon-speaker-8').classList.add('ocultar');
	document.querySelector('.flaticon-speaker-5').classList.remove('ocultar');
});

boton.addEventListener("click", function(){
  if (!sound) {
    v.play();
    sound = true;
	document.querySelector('.flaticon-speaker-5').classList.add('ocultar');
	document.querySelector('.flaticon-speaker-8').classList.remove('ocultar');
  } else {
    v.pause();
    sound = false;
	document.querySelector('.flaticon-speaker-8').classList.add('ocultar');
	document.querySelector('.flaticon-speaker-5').classList.remove('ocultar');
  }
});

verso = document.getElementsByClassName("verso");
h2 = document.getElementsByTagName("h2");

function show_partiture(){
	document.querySelector("section").classList.add("ocultar");
	var partiture = document.createElement("div");
	partiture.id = ("partiture");
	partiture.style = ("margin-top: 56px; height: 100%;");
	document.querySelector("body").appendChild(partiture);
	document.getElementById("partiture").innerHTML = '<button class="partiture_close" onclick="location.reload()"><span class="flaticon-error"></span></button><iframe src="https://docs.google.com/viewer?url=http://www.himnariop.com/pdf/'+num_himno+'.pdf&embedded=true" width="100%" height="100%"></iframe>';

}

function convert_to_slides(){
	var ver = new Array;
	var num_ver = new Array;
	intro = document.getElementsByClassName("intro")[0].innerHTML;
	ref = document.getElementsByClassName("ref")[0].innerHTML;
	autor = document.getElementsByTagName("p")[verso.length+2].innerHTML;
	for (i=0;i < verso.length; i++){
		ver[i] = verso[i].innerHTML;
		num_ver[i] = h2[i].innerHTML;
	}

    if (temaPagina == "claro"){
        temaSlides = "white"
    } else {
        temaSlides = "black"
    }

	var enlaces = '';

	for(var i = 0; i < ver.length; i++){
		enlaces += "<a class='enlace' href='#/"+(i+1)+"'>"+num_ver[i]+"</a>";
	}

	document.write('<!doctype html>	<html lang="en">	<head>		<meta charset="utf-8">		<title>'+titulo+'</title><meta name="description" content="A framework for easily creating beautiful presentations using HTML"><meta name="author" content="Hakim El Hattab"><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"><link rel="stylesheet" href="css/reveal.css"><link rel="stylesheet" href="css/theme/'+temaSlides+'.css" id="theme"></head><body><div class="reveal"><div class="enlaces" style="max-width:calc(100% - 120px); overflow:auto;">'+enlaces+'</div><div class="play_pause"><a id="play_pause" class="enlace" href="javascript:;" style="font-family: monospace;" >▶/❚❚</a></div><div class="cerrar"><a id="play_pause" class="enlace" href="">✖</a></div>	<!-- Any section element inside of this container is displayed as a slide -->	<div class="slides">		'
	);
document.write('<section style="text-align: left;"><h1>Himno '+num_himno+". "+titulo+'</h1><p>'+intro+'<div style="text-align: right;">'+ref+'</div></p></section>');

for (i=0;i < ver.length; i++){
	document.write('<section><h1 style="font-size:48px;"><a href="#/'+(i+1)+'">'+num_ver[i]+'</a></h1><p><b>'+ver[i]+'</b></p></section>');
}

	document.write('<section style="text-align: left;"><h2>Autor</h2><p>'+autor+'</p></section>');

	document.write('</div>	</div><script src="lib/js/head.min.js"></script>	<script src="js/reveal.js"></script><script>document.getElementById("play_pause").addEventListener("click", function(){		if (!sound) {		  v.play();		  sound = true;		} else {		  v.pause();		  sound = false;		}	  });			Reveal.initialize({		controls: true,		progress: true,		history: true,		center: true,		transition: "slide"	});</script></body></html>');

}