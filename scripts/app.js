filename = document.URL;
localStorage.setItem("back_to",filename);

//Recolorear la pagina
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
		colorPrimario = "#3F51B5"
		colorPrimarioOscuro = "#303F9F"
		colorPrimarioClaro = "#C5CAE9"
		colorAcento = "#536DFE"
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
	indice li {color: ${colorAcento}}
	indice li span {color:${colorPrimarioOscuro}}
	.submenu{background:${colorPrimarioClaro};color:#000}
	.submenu:hover{background:${colorAcento}}
	indice li ul li a{background:${colorPrimarioClaro}}
	indice li ul li a:hover{background:${colorAcento}}
	.link{background:${colorPrimarioClaro}}
	.link:hover{background:${colorAcento}}
	#lista li a{background:${colorPrimarioClaro}}
	#lista li a:hover{background:${colorAcento}}
`));

document.body.appendChild(nuevoEstilo);

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
