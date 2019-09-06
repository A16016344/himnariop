var boton = document.getElementById("boton");
var v = document.getElementsByTagName("audio")[0];
var sound = false;
var num_000;
var num_next = num_himno+1;
var num_prev = num_himno-1;
favorito = localStorage.getItem("fav"+num_himno);
modoNoche = localStorage.getItem("modoNoche");

// Modificar Botón Atras para ir a la ultima pagina principal.
var back_to = localStorage.getItem("back_to");
var back_button = document.getElementsByTagName("a")[0];

if (back_to != null){
	back_button.href = back_to;
}


document.querySelector('.header__title').textContent = titulo;
document.querySelector('title').textContent = num_himno+". "+titulo+" | Sólo a Dios la Gloria";
document.querySelector('.titulo').innerHTML = "<button id='addFav' class='botonF2'><span  class='flaticon-star'></span></button> Himno "+num_himno+". "+titulo+"<br><center><button class='proyectar' onclick='convert_to_slides();launchFullScreen(document.documentElement);'>Modo Proyector</button></center>";
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

if (num_himno >= 100) {
	num_000 = num_himno;
} else if (num_himno >= 10) {
	num_000 = "0"+num_himno;
} else {
	num_000 = "00"+num_himno;
}

if (num_prev >= 100) {
	num_prev = num_prev;
} else if (num_prev >= 10) {
	num_prev = "0"+num_prev;
} else {
	num_prev = "00"+num_prev;
}

if (num_next >= 100) {
	num_prev = num_prev;
} else if (num_next >= 10) {
	num_next = "0"+num_next;
} else {
	num_next = "00"+num_next;
}

document.querySelector('audio').src = "https://ipuertadesalvacion.com/Himnos/"+num_000+".mp3";
document.querySelector('audio').setAttribute('preload','auto');
document.querySelector('.next_himno').href = num_next+".html"
document.querySelector('.prev_himno').href = num_prev+".html"

if(modoNoche == "true"){
	document.querySelector("html").classList.add('modoNoche');
	document.querySelector("body").classList.add('modoNoche');
	document.querySelector("section").classList.add('modoNoche');
}

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

	var enlaces = '';

	for(var i = 0; i < ver.length; i++){
		enlaces += "<a class='enlace' href='#/"+(i+1)+"'>"+num_ver[i]+"</a>";
	}

	document.write('<!doctype html>	<html lang="en">	<head>		<meta charset="utf-8">		<title>'+titulo+'</title><meta name="description" content="A framework for easily creating beautiful presentations using HTML"><meta name="author" content="Hakim El Hattab"><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"><link rel="stylesheet" href="css/reveal.css"><link rel="stylesheet" href="css/theme/black.css" id="theme"></head><body><div class="reveal"><div class="enlaces">'+enlaces+'</div><div class="play_pause"><a id="play_pause" class="enlace" href="javascript:;" style="font-family: monospace;" >▶/❚❚</a></div><div class="cerrar"><a id="play_pause" class="enlace" href="">✖</a></div>	<!-- Any section element inside of this container is displayed as a slide -->	<div class="slides">		'
	);
document.write('<section style="text-align: left;"><h1>Himno '+num_himno+". "+titulo+'</h1><p>'+intro+'<div style="text-align: right;">'+ref+'</div></p></section>');

for (i=0;i < ver.length; i++){
	document.write('<section><h1 style="font-size:48px;"><a href="#/'+(i+1)+'">'+num_ver[i]+'</a></h1><p><b>'+ver[i]+'</b></p></section>');
}

	document.write('<section style="text-align: left;"><h2>Autor</h2><p>'+autor+'</p></section>');

	document.write('</div>	</div><script src="lib/js/head.min.js"></script>	<script src="js/reveal.js"></script><script>document.getElementById("play_pause").addEventListener("click", function(){		if (!sound) {		  v.play();		  sound = true;		} else {		  v.pause();		  sound = false;		}	  });			Reveal.initialize({		controls: true,		progress: true,		history: true,		center: true,		transition: "slide"	});</script></body></html>');

}