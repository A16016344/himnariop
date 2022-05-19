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

//Notificacion permanente
document.write(`HIMNARIOP.COM Y APP.HIMNARIOP.COM YA NO ESTAN DISPONIBLES, Y EL ACCESO A HIMNARIOP.WEB.APP TAMBIEN SERÁ LIMITADO, POR FAVOR, INSTALA LA APP PARA PODER USARLA SIN CONEXIÓN, SI YA LA TIENES INSTALADA ES PROBABLE QUE SIGA FUNCIONANDO, PERO PODRÍA NO FUNCIONAR LOS ARCHIVOS PDF DE LAS PARTITURAS Y LAS PISTAS DE AUDIO, INTENTARÉ PONER EN MARCHA NUEVAMENTE EL PROYECTO, PERO NO TENGO LOS RECURSOS ECONOMICOS PARA HACERLO, SI DESEAS PUEDES APOYAR AL PROYECTO PUEDES PONERTE EN CONTACTO CONMIGO AL <a href="https://wa.me/5219993042573" target="_blank">999 304 2573</a>`)
document.write(`<br><br>Si deseas donar al proyecto puedes ponerte en contacto conmigo o suscribirte a una donación mensual de lo que quieras aportar en <a href="https://www.mercadopago.com.mx/subscriptions/checkout?preapproval_plan_id=2c93808480710707018077566dd00124" target="_blank">https://www.mercadopago.com.mx/subscriptions/checkout?preapproval_plan_id=2c93808480710707018077566dd00124</a>`)
document.write(`<br><br>Si deseas donar por solo una ocasión lo puedes hacer desde <a href="https://paypal.me/israeldzib" target="_blank">https://paypal.me/israeldzib</a> dandole click en Enviar`)

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
