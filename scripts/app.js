modoNoche = localStorage.getItem("modoNoche");
filename = document.URL;
localStorage.setItem("back_to",filename);

if(modoNoche == "true"){
	document.querySelector("html").classList.add('modoNoche');
	document.querySelector("body").classList.add('modoNoche');
	document.querySelector("section").classList.add('modoNoche');
	var li = document.querySelectorAll("li");
	var i;
	for (i = 0; i < li.length; i++) {
		li[i].classList.add('modoNoche');
	}
	var a = document.querySelectorAll(".link");
	for (i = 0; i > a.length; i++) {
		a[i].classList.add('modoNoche');
	}
}

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

(function() {
  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
