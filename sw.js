var cacheName = "himnario_v1";
var filesToCache = [
  './assets/color-circles/amber.svg',
  './assets/color-circles/blue-grey.svg',
  './assets/color-circles/blue.svg',
  './assets/color-circles/brown.svg',
  './assets/color-circles/cyan.svg',
  './assets/color-circles/deep-orange.svg',
  './assets/color-circles/deep-purple.svg',
  './assets/color-circles/green.svg',
  './assets/color-circles/grey.svg',
  './assets/color-circles/indigo.svg',
  './assets/color-circles/light-blue.svg',
  './assets/color-circles/light-green.svg',
  './assets/color-circles/lime.svg',
  './assets/color-circles/orange.svg',
  './assets/color-circles/pink.svg',
  './assets/color-circles/purple.svg',
  './assets/color-circles/red.svg',
  './assets/color-circles/teal.svg',
  './assets/color-circles/yellow.svg',
  './scripts/materialize.min.js',
  './styles/global.css',
  './styles/materialize.min.css',
  './styles/revealjs/black.css',
  './styles/revealjs/reveal.css',
  './styles/revealjs/white.css',
  './styles/revealjs/fonts/source-sans-pro/source-sans-pro-italic.woff',
  './styles/revealjs/fonts/source-sans-pro/source-sans-pro-regular.woff',
  './styles/revealjs/fonts/source-sans-pro/source-sans-pro-semibold.woff',
  './styles/revealjs/fonts/source-sans-pro/source-sans-pro.css'
];

var himnosCache = "himnos_v1";
var files_Himnos = [
  '.',
  './index.html',
  './main.js'
];


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
  e.waitUntil(
    caches.open(himnosCache).then(function(cache) {
      console.log('[ServiceWorker] Caching HimnosOffline');
      return cache.addAll(files_Himnos);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== himnosCache && key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
  
      e.respondWith(
        caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
        })
      );
  });
  