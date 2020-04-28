var actualizacion = "Abril 2020"
var Update = localStorage.getItem("okUpdate");

if (version == actualizacion){
    if (actualizacion != Update){
        document.write(`<div style="border-style:dotted;display:block;"><p>Tu aplicación está actualizada.</p>`); 
        document.write(`<p><button onclick="okUpdate();">OK</button></p></div>`); 
    }
} else {
    document.write(`<div style="border-style:dotted;display:block;"><p>Versión actual: ${version}</p>`); 
    document.write(`<p>Última versión: ${actualizacion}</p>`);
    document.write(`<p><button onclick="actualizarApp();">Actualizar ahora</button></p></div>`);  
}

function actualizarApp(){
    console.log('[ServiceWorker] Removing old cache');
    caches.delete("HimnarioOffline");
    caches.open("HimnarioOffline").then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
        alert("La aplicación se ha actualizado");
        location.reload();
      })
}

function okUpdate(){
    localStorage.setItem("okUpdate",actualizacion);
    location.reload();
}
