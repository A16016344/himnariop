verso = document.getElementsByClassName("verso");
h2 = document.getElementsByTagName("h2");
titulo = document.getElementsByTagName("h1")[0].innerText

function convert_to_slides(){
	var ver = new Array;
	var num_ver = new Array;
	intro = document.getElementsByClassName("intro")[0].innerHTML;
	ref = document.getElementsByClassName("ref")[0].innerHTML;
	for (i=0;i < verso.length; i++){
		ver[i] = verso[i].innerHTML;
		num_ver[i] = h2[i].innerHTML;
	}

    var enlaces = '';
    
    temaPagina = localStorage.getItem("temaPagina")

    if (temaPagina == "claro"){
        temaSlides = "white"
    } else {
        temaSlides = "black"
    }

	for(var i = 0; i < ver.length; i++){
		enlaces += "<a class='enlace' href='#/"+(i+1)+"'>"+num_ver[i]+"</a>";
	}

	document.write('<!doctype html>	<html lang="en">	<head>		<meta charset="utf-8">		<title>'+titulo+'</title><meta name="description" content="A framework for easily creating beautiful presentations using HTML"><meta name="author" content="Hakim El Hattab"><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"><link rel="stylesheet" href="../himno/css/reveal.css"><link rel="stylesheet" href="../himno/css/theme/'+temaSlides+'.css" id="theme"></head><body><div class="reveal"><div class="enlaces" style="max-width:calc(100% - 120px); overflow:auto;">'+enlaces+'</div><div class="cerrar"><a id="play_pause" class="enlace" href="">✖</a></div>	<!-- Any section element inside of this container is displayed as a slide -->	<div class="slides">		'
	);
document.write('<section style="text-align: left;"><h1>'+titulo+'</h1><p>'+intro+'<div style="text-align: right;">'+ref+'</div></p></section>');

for (i=0;i < ver.length; i++){
	document.write('<section><h1 style="font-size:48px;"><a href="#/'+(i+1)+'">'+num_ver[i]+'</a></h1><p><b>'+ver[i]+'</b></p></section>');
}

	document.write('</div>	</div><script src="../himno/lib/js/head.min.js"></script>	<script src="../himno/js/reveal.js"></script><script>document.getElementById("play_pause").addEventListener("click", function(){		if (!sound) {		  v.play();		  sound = true;		} else {		  v.pause();		  sound = false;		}	  });			Reveal.initialize({		controls: true,		progress: true,		history: true,		center: true,		transition: "slide"	});</script></body></html>');

}