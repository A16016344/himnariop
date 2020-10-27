var actualizacion = "Noviembre 2020"
var blogUrl = "https://www.himnariop.com/2020/10/27/actualizacion-noviembre-2020/"
var Update = localStorage.getItem("okUpdate");
var filesToCache = [
	//UI
  '.',
  'index.html',
  'buscar.html',
  'favoritos.html',
  'cuadricula.html',
  'info.html',
  'scripts/app.js',
  'scripts/framework.js',
  'styles/inline.css',
  'font/flaticon.css',
  'font/Flaticon.ttf',
  'font/Flaticon.eot',
  'font/Flaticon.woff',
  'images/logo.png',
  'images/back_12.svg',
  'images/next_12.svg',
  'images/prev_12.svg',
  'images/fav_12.svg',
  'images/search_12.svg',
  'himno/play_pause.js',
  //Framework diapositivas
  'himno/css/reveal.css',
  'himno/css/theme/black.css',
  'himno/js/reveal.js',
  'himno/lib/js/classList.js',
  'himno/lib/js/head.min.js',
  'himno/lib/js/html5shiv.js',
  //Ayudas liturgicas
  'ayudas_liturgicas/apostoles.html',
  'ayudas_liturgicas/bienaventuranzas.html',
  'ayudas_liturgicas/mandamiento.html',
  'ayudas_liturgicas/mandamientos.html',
  'ayudas_liturgicas/niceno.html',
  'ayudas_liturgicas/padrenuestro.html',
  'ayudas_liturgicas/toSlides.js'
]

if (version == actualizacion){
    if (actualizacion != Update){
        document.write(`<div style="border-style:dotted;display:block;"><p>Tu aplicación está actualizada.</p>`); 
        document.write(`<p><button onclick="okUpdate();">Aceptar</button> <button onclick="href(blogUrl);">Más información</button></p></div>`); 
    }
} else {
    document.write(`<div style="border-style:dotted;display:block;"><p>Versión actual: ${version}</p>`); 
    document.write(`<p>Última versión: ${actualizacion}</p>`);
    document.write(`<p><button id="boton_actualizar" onclick="actualizarApp();">Actualizar ahora</button> <button onclick="href(blogUrl);">Más información</button></p></div>`);  
}

if (!localStorage.getItem("colorEnfasis") && !localStorage.getItem("temaPagina") && version == actualizacion){
    document.write(`<br><div style="border-style:dotted;display:block;position:fixed;background:black;width:calc(760px);max-width: calc(100% - 30px)"><p>Ahora puedes escoger el color y el tema de tu aplicación.</p>`); 
    document.write(`<p><a class="link" href="info.html">Ir a configuración</a></p>`); 
    document.write(`<p><a class="link" href="#" onclick="temaDefault();">Tema por defecto</a></div>`);
}

function temaDefault() {
    localStorage.setItem("colorEnfasis", "indigo");
    localStorage.setItem("temaPagina", "oscuro");
    location.reload();
}

function actualizarApp(){
    console.log('[ServiceWorker] Removing old cache');
    caches.delete("HimnarioOffline");
    caches.open("HimnarioOffline").then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
      alert("La aplicación se esta actualizando.");
      document.querySelector("#boton_actualizar").classList.add("ocultar");
    }

function okUpdate(){
    localStorage.setItem("okUpdate",actualizacion);
    location.reload();
}

function href(enlace){
    window.open(enlace);
}
